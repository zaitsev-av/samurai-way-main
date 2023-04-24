import { DispatchType } from "./reduxStore";
import { authAPI } from "../api/API";

export type ResponseAuthDataType = {
	id: number | null
	login: string | null
	email: string | null
}

const initialState = {
	data: {
		id: null,
		login: null,
		email: null,
	} as ResponseAuthDataType,
	message: [],
	fieldsErrors: [],
	resultCode: 0,
	isFetching: false,
	isAuth: false
}

export type ResponseAuthType = typeof initialState
type ActionType = ReturnType<typeof setUserDataAC>

export const authReducer = ( state: ResponseAuthType = initialState, action: ActionType ): ResponseAuthType => {
	switch ( action.type ) {
		case "SET-USER-DATA": {
			return {...state, data: action.payload.authData.data, isAuth: true}
		}
		default: {
			return state
		}
	}
}

export const setUserDataAC = ( authData: ResponseAuthType ) => {
	return {
		type: "SET-USER-DATA",
		payload: {
			authData
		}
	} as const
}

export const getUsersAuthData = () => ( dispatch: DispatchType) => {
	authAPI.setUser()
		.then( ( res ) => {
			if ( res.resultCode === 0 ) {
				dispatch( setUserDataAC( res.data ) )
				    console.log(res.data)
			}
		})
}
