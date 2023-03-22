import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { menuReducer } from "./menuReducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
	profileReducer,
	dialogsReducer,
	menuReducer,
	usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

