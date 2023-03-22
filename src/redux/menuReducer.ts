import { v1 } from "uuid";


const initialState = {
	menu: [
		"Profile", 'Messages', 'News', 'Music', 'Settings'
	],
	friends: [
		{ id: v1(), userName: "Alexandr" },
		{ id: v1(), userName: "Viktoria" },
		{ id: v1(), userName: "Sister" },
		{ id: v1(), userName: "Mom" },
		{ id: v1(), userName: "Dad" },
	]
} as const

export type MenuPagesType = typeof initialState

export const menuReducer = ( state: MenuPagesType = initialState, action:any ) => {
	return state
}

