import { usersAPI } from "../api/API";
import { DispatchType } from "./reduxStore";

export type UserType = {
	name: string
	id: number
	followed: boolean
	photos: {
		small: string
		large: string
	}
	status: string
}

export type UsersPageType = {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: number []
}

const initialState: UsersPageType = {
	users: [],
	pageSize: 20,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
}

export type ActionType =
	| ReturnType<typeof followingUserSuccessAC>
	| ReturnType<typeof setUserAC>
	| ReturnType<typeof setCurrentPageAC>
	| ReturnType<typeof setTotalUsersCountAC>
	| ReturnType<typeof toggleIsFetchingAC>
	| ReturnType<typeof toggleFollowingProgressAC>

export const usersReducer = ( state: UsersPageType = initialState, action: ActionType ): UsersPageType => {
	switch ( action.type ) {
		case 'user/SET-USERS': {
			return { ...state, users: action.payload.users }
		}
		case "user/SET-CURRENT-PAGE": {
			return { ...state, currentPage: action.payload.currentPage }
		}
		case "user/SET-TOTAL-USER-COUNT": {
			return { ...state, totalUsersCount: action.payload.totalCount }
		}
		case "user/SET-TOGGLE-IS-FETCHING": {
			return { ...state, isFetching: action.preload.newIsFetching }
		}
		case "user/TOGGLE-IN-FOLLOWING-PROGRESS": {
			return action.progress ? { ...state, followingInProgress: [ ...state.followingInProgress, action.id ] }
				: { ...state, followingInProgress: state.followingInProgress.filter( ( id ) => id !== action.id ) }
		}
		case "user/FOLLOWING-USER": {
			return {
				...state, users: state.users.map( u => u.id === action.payload.userID
					?
					{ ...u, followed: !u.followed } : u )
			}
		}
		default : {
			return state
		}
	}
}

export const followingUserSuccessAC = ( userID: number ) => {
	console.log( 'followUserAC' )
	return {
		type: 'user/FOLLOWING-USER',
		payload: {
			userID
		}
	} as const
}

export const setUserAC = ( users: UserType[] ) => {
	return {
		type: 'user/SET-USERS',
		payload: {
			users
		}
	} as const
}
export const setCurrentPageAC = ( currentPage: number ) => {
	return {
		type: "user/SET-CURRENT-PAGE",
		payload: {
			currentPage
		}
	} as const
}
export const setTotalUsersCountAC = ( totalCount: number) => {
	return {
		type: "user/SET-TOTAL-USER-COUNT",
		payload: {
			totalCount
		}
	} as const
}
export const toggleIsFetchingAC = ( newIsFetching: boolean) => {
	return {
		type: 'user/SET-TOGGLE-IS-FETCHING',
		preload: {
			newIsFetching
		}
	} as const
}

export const toggleFollowingProgressAC = ( progress: boolean, id: number ) => {
	return {
		type: "user/TOGGLE-IN-FOLLOWING-PROGRESS",
		progress, id
	} as const
}


export const getUserThunkCreater = ( currentPage: number, pageSize: number ) => async ( dispatch: DispatchType ) => {
	dispatch( toggleIsFetchingAC( true ) ) // при запросе на сервер во время
	// ожидания ответа включается лоадер
	const res = await usersAPI.getUsers( currentPage, pageSize )
	dispatch( setUserAC( res.items ) )
	dispatch( setTotalUsersCountAC( res.totalCount ) )
	dispatch( toggleIsFetchingAC( false ) )//убирает лоадер с страницы
}

export const follow = ( userID: number ) => async ( dispatch: DispatchType ) => {
	dispatch( toggleFollowingProgressAC( true, userID ) )
	const res = await usersAPI.follow( userID )
	res === 0 && dispatch( followingUserSuccessAC( userID ) )
	dispatch( toggleFollowingProgressAC( false, userID ) )
}

export const unfollow = ( userID: number ) => async ( dispatch: DispatchType ) => {
	dispatch( toggleFollowingProgressAC( true, userID ) )
	const res = await usersAPI.unfollow( userID )
	res === 0 && dispatch( followingUserSuccessAC( userID ) )
	dispatch( toggleFollowingProgressAC( false, userID ) )
}
