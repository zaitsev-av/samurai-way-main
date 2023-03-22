
const initialState: InitialStateType = {
	users: []
}

// {
// 	id: v1(), fullName: 'Alexander', status: 'Good job',
// 	followed: true,
// 	location: {
// 	city: 'Mozyr',
// 		country: 'Belarus'
// }
// },
// {
// 	id: v1(), fullName: 'Viktoria', status: 'Great wife',
// 	followed: true,
// 	location: {
// 	city: 'Mozyr',
// 		country: 'Belarus'
// }
// },
// {
// 	id: v1(), fullName: 'Ksenia', status: 'Daughter Alexander',
// 	followed: true,
// 	location: {
// 	city: 'Mozyr',
// 		country: 'Belarus'
// }
// },
// {
// 	id: v1(), fullName: 'Viktor', status: 'Web developer',
// 	followed: false,
// 	location: {
// 	city: 'Moscow',
// 		country: 'Russia'
// }
// }

type InitialStateType = {
	users: UserType[]
}

export type UsersPageType = typeof initialState


export const followUserAC = ( userID: string ) => {
	return {
		type: 'FOLLOW-USER',
		payload: {
			userID
		}
	} as const
}

export type UserType = {
	id: string,
	fullName: string,
	avatar: string
	status: string,
	followed: boolean,
	location: {
		city: string,
		country: string
	}
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

export const usersReducer = ( state: UsersPageType = initialState, action: ActionType ): UsersPageType => {
	switch ( action.type ) {
		case 'FOLLOW-USER': {
			return {
				...state, users: state.users.map( u => u.id === action.payload.userID
					?
					{ ...u, followed: !u.followed }
					:
					u
				)
			}
		}
		case 'SET-USERS': {
			return { ...state, users: [ ...state.users, ...action.payload.users ] }
		}
		default :
			return state
	}
	
}
