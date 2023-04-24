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

export type ActionType = ReturnType<typeof followUserSuccessAC> | ReturnType<typeof unfollowUserSuccessAC> | ReturnType<typeof setUserAC>
	| ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC>
	| ReturnType<typeof toggleIsFetchingAC>| ReturnType<typeof toggleFollowingProgressAC>

export const usersReducer = ( state: UsersPageType = initialState, action: ActionType ): UsersPageType => {
	switch ( action.type ) {
		case 'SET-USERS': {
			return { ...state, users: action.payload.users}
		}
		case "SET-CURRENT-PAGE": {
			return {...state, currentPage: action.payload.currentPage}
		}
		case "SET-TOTAL-USER-COUNT": {
			return {...state, totalUsersCount: action.payload.totalCount}
		}
		case "SET-TOGGLE-IS-FETCHING": {
			return {...state, isFetching: action.preload.newIsFetching}
		}
		case "TOGGLE-IN-FOLLOWING-PROGRESS": {
			return action.progress ? {...state, followingInProgress: [...state.followingInProgress, action.id]}
				: {...state, followingInProgress: state.followingInProgress.filter((id) => id !== action.id)}
		}
		case "FOLLOW-USER": {
			debugger
			return {...state, users: state.users.map(u => u.id === action.payload.userID
					?
					{...u, followed: true}: u)}
		}
		case "UNFOLLOW-USER": {
			debugger
			return {...state, users: state.users.map(u => u.id === action.payload.userID
					?
					{...u, followed: false}: u)}
		}
		default : {
			return state
		}
	}
}

export const followUserSuccessAC = ( userID: number ) => {
	console.log('followUserAC')
	return {
		type: 'FOLLOW-USER',
		payload: {
			userID
		}
	} as const
}

export const unfollowUserSuccessAC = ( userID: number ) => {
	console.log('unfollowUserAC')
	return {
		type: 'UNFOLLOW-USER',
		payload: {
			userID
		}
	} as const
}

export const setUserAC = ( users: UserType[] ) => {
	return {
		type: 'SET-USERS',
		payload: {
			users
		}
	} as const
}
export const setCurrentPageAC = ( currentPage: number ) => {
	return {
		type: "SET-CURRENT-PAGE",
		payload: {
			currentPage
		}
	} as const
}
export const setTotalUsersCountAC = ( totalCount: number) => {
	return {
		type: "SET-TOTAL-USER-COUNT",
		payload: {
			totalCount
		}
	} as const
}
export const toggleIsFetchingAC = ( newIsFetching: boolean) => {
	return {
		type: 'SET-TOGGLE-IS-FETCHING',
		preload: {
			newIsFetching
		}
	} as const
}

export const toggleFollowingProgressAC = ( progress: boolean, id: number ) => {
	return {
		type: "TOGGLE-IN-FOLLOWING-PROGRESS",
		progress, id
	} as const
}


export const getUserThunkCreater = ( currentPage: number, pageSize: number ) => ( dispatch: DispatchType)  => {
	dispatch( toggleIsFetchingAC( true ) ) // при запросе на сервер во время
	// ожидания ответа включается лоадер
	usersAPI.getUsers( currentPage, pageSize ).then( data => {
		dispatch( setUserAC( data.items ) )
		dispatch( setTotalUsersCountAC( data.totalCount ) )
		dispatch( toggleIsFetchingAC( false ) )//убирает лоадер с страницы
	} )
	
}

export const follow = ( userID: number ) => ( dispatch: DispatchType ) => {
	dispatch( toggleFollowingProgressAC( true, userID ) )
	usersAPI.follow( userID ).then( data => {
		data === 0 && dispatch(followUserSuccessAC( userID ))
		dispatch(toggleFollowingProgressAC( false, userID ))
	} )
}

export const unfollow = ( userID: number ) => ( dispatch: DispatchType ) => {
	dispatch( toggleFollowingProgressAC( true, userID ) )
	usersAPI.unfollow( userID ).then( data => {
		data === 0 && dispatch( unfollowUserSuccessAC( userID ))
 		dispatch( toggleFollowingProgressAC( false, userID ))
	} )
}
