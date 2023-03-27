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


export type ActionType = ReturnType<typeof followUserAC> | ReturnType<typeof setUserAC>

export const usersReducer = ( state: UserType[] = [], action: ActionType ): UserType[] => {
	switch ( action.type ) {
		case 'FOLLOW-USER': {
			return state.map( el => el.id === action.payload.userID ? { ...el, follow: !el.follow } : el )
		}
		case 'SET-USERS': {
			return [ ...state, ...action.payload.users ]
		}
		default :
			return state
	}
	
}
