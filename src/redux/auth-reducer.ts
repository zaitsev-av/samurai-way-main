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
	debugger
	switch ( action.type ) {
		case "SET-USER-DATA": {
			return {...state, ...action.payload.authData, isAuth: true}
		}
		default: {
			return state
		}
	}
}

export const setUserDataAC = ( authData: ResponseAuthDataType ) => {
	debugger
	return {
		type: "SET-USER-DATA",
		payload: {
			authData
		}
	} as const
}

export const getUsersAuthData = () => ( dispatch: DispatchType) => {
	authAPI.me()
		.then( ( data ) => {
			data.resultCode === 0 && dispatch( setUserDataAC( data.data ) )
				    console.log(data.data)
			
		})
}
