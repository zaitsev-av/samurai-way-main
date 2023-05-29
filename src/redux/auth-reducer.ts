import { DispatchType } from "./reduxStore";
import { authAPI } from "../api/API";

const initialState: ResponseAuthDataType = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

export const authReducer = ( state = initialState, action: ActionType ): ResponseAuthDataType => {
	switch ( action.type ) {
		case "SET-USER-DATA": {
			return {...state, ...action.payload.authData, isAuth: action.payload.isAuth}
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
	return authAPI.me()
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

export const logOutTC = () => async ( dispatch: DispatchType) => {
	console.log('called')
	try {
		const res = await  authAPI.logout()
		if ( res.data.resultCode === 0 ) {
			const data: ResponseAuthDataType = { id: null, login: null, email: null, isAuth: false }
			dispatch( setUserDataAC( data, false ) )
		}
	} catch ( e ) {
		    console.warn(e)
	}
}

//types

export type ResponseAuthDataType = {
	id: number | null
	login: string | null
	email: string | null
	isAuth: boolean
}

type ActionType = ReturnType<typeof setUserDataAC>
