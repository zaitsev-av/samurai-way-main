import { MenuType } from "./store";

const initialState = {
	menuPages: [
		"Profile", 'Messages', 'News', 'Music', 'Settings'
	]
} as MenuType

type MenuPagesType = typeof initialState

export const menuReducer = ( state: MenuPagesType = initialState, action:any ) => {
	return state
}

