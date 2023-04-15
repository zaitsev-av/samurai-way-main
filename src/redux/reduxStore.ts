import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { menuReducer } from "./menuReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./auth-reducer";

const rootReducer = combineReducers({
	profileReducer,
	dialogsReducer,
	menuReducer,
	usersReducer,
	authData: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

