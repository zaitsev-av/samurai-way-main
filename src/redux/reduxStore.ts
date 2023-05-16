import { applyMiddleware, combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { menuReducer } from "./menuReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./auth-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	profileReducer,
	dialogsReducer,
	menuReducer,
	usersReducer,
	authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch
export const store = createStore(rootReducer, applyMiddleware(thunk))

