import { DispatchType } from "./reduxStore";
import { authAPI } from "../api/API";

export type ResponseAuthDataType = {
	id: number | null
	login: string | null
	email: string | null
	isAuth: boolean
}

const initialState: ResponseAuthDataType = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}


type ActionType = ReturnType<typeof setUserDataAC>

export const authReducer = ( state = initialState, action: ActionType ): ResponseAuthDataType => {
	switch ( action.type ) {
		case "SET-USER-DATA": {
			return {...state, ...action.payload.authData, isAuth: true}
		}
		default: {
			return state
		}
	}
}

export const setUserDataAC = ( authData: ResponseAuthDataType, isAuth: boolean ) => {
	return {
		type: "SET-USER-DATA",
		payload: {
			authData,
			isAuth
		}
	} as const
}
//thunks
export const getUsersAuthData = () => ( dispatch: DispatchType) => {
	authAPI.me()
		.then( ( data ) => {
			data.resultCode === 0 && dispatch( setUserDataAC( data.data, true ) )
		})
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => ( dispatch: DispatchType) => {
	authAPI.login(email,password, rememberMe)
		.then( ( data ) => {
			data.resultCode === 0 && dispatch( getUsersAuthData() )
		})
}

export const logoutTC = () => ( dispatch: DispatchType) => {
	authAPI.logout()
		.then( ( data ) => {
			data.resultCode === 0 && dispatch(  setUserDataAC( data.data, false ) )
		})
}