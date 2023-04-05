export type UserType = {
	name: string
	id: string
	follow: boolean
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
	followingInProgress: string[]
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
	ReturnType<typeof followUserAC>
	| ReturnType<typeof setUserAC>
	| ReturnType<typeof setCurrentPageAC>

export const usersReducer = ( state: UsersPageType = initialState, action: ActionType ): UsersPageType => {
	switch ( action.type ) {
		case 'FOLLOW-USER': {
			return {
				...state,
				users: state.users.map( el => el.id === action.payload.userID ? { ...el, follow: !el.follow } : el )
			}
		}
		case 'SET-USERS': {
			return { ...state, users: [ ...state.users, ...action.payload.users ] }
		}
		case "SET-CURRENT-PAGE": {
			return {...state, currentPage: action.payload.currentPage}
		}
		default : {
			return state
		}
	}
}

export const followUserAC = ( userID: string ) => {
	return {
		type: 'FOLLOW-USER',
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

