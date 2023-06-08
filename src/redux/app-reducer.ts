import { getUsersAuthData } from "./auth-reducer";
import { DispatchType } from "./reduxStore";

const initialState: InitialStateType = {
	isInitialized: false
}

export const appReducer = ( state: InitialStateType = initialState, action: ActionType ):InitialStateType  => {
	switch ( action.type ) {
		case "app/SET_INITIALIZED":
			return {
				...state, isInitialized: true
			}
		default:
			return state
	}
}

//actions
export const setInitializedAC = (  ) => {
	return {
		type: "app/SET_INITIALIZED",
	} as const
}

//thunk

export const setInitializeAppTC = () => ( dispatch: DispatchType ) => {
	const promise = dispatch(getUsersAuthData())
		Promise.all([promise])
			.then(()=> {
				dispatch(setInitializedAC())
			})
}


//types
type ActionType = ReturnType<typeof setInitializedAC>

export type InitialStateType = {
	isInitialized: boolean
}