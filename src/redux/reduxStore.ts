import { combineReducers, createStore } from "redux";
import { profileReducer } from "./ProfileReducer";
import { dialogsReducer } from "./DialogsReducer";

const rootReducer = combineReducers({
	profileReducer,
	dialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

