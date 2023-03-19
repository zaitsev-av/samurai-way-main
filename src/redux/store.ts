import { v1 } from "uuid";
import { addPostAC, profileReducer, upDateNewPostAC } from "./profileReducer";
import { addNewMessageAC, dialogsReducer, updateNewMessageAC } from "./dialogsReducer";
import { menuReducer } from "./MenuReducer";

export const Menu = {
	menuPages: [
		"Profile", 'Messages', 'News', 'Music', 'Settings'
	]
}

export type MenuType = {
	menuPages: Array<string>
}
export type PostType = {
	id: string
	text: string
}

export type DialogPropsType = {
	id: string
	userName: string
}
export type MessagesPropsType = {
	id: string
	message: string
}

export type ProfilePageType ={
	posts: PostType[]
	newPostText: string
}
export type DialogsPageType = {
	dialogs: DialogPropsType[]
	messages: MessagesPropsType[]
	newMessageText: string
}

export type DataPropsType = {
	menu: MenuType
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof upDateNewPostAC> |
	ReturnType<typeof addNewMessageAC> | ReturnType<typeof updateNewMessageAC>
export type StoreType = {
	_state: DataPropsType
	rerenderEntireTree: () => void
	subscriber: (observer: () => void) => void
	getState: () => DataPropsType
	dispatch: (action: ActionsTypes) => void
}




export const store = {
	// _state: {
	// 	menu: {
	// 		menuPages: [
	// 			"Profile", 'Messages', 'News', 'Music', 'Settings'
	// 		]
	// 	},
	// 	profilePage: {
	// 		posts: [
	// 			{
	// 				id: v1(),
	// 				text: "Lorem ipsum diam massa — proin maecenas ligula gravida non pharetra, elementum tellus malesuada tellus integer. "
	// 			},
	// 			{
	// 				id: v1(),
	// 				text: "Magna curabitur nec pellentesque tellus quam at sagittis commodo eu commodo metus fusce sed quisque rutrum vitae tellus bibendum justo tellus."
	// 			},
	// 			{
	// 				id: v1(),
	// 				text: "Nam ultricies bibendum porta, orci eu leo quisque enim eros molestie gravida et elementum duis."
	// 			},
	// 		],
	// 		newPostText: ''
	// 	},
	// 	dialogsPage: {
	// 		dialogs: [
	// 			{id: v1(), userName: "Alexandr"},
	// 			{id: v1(), userName: "Viktoria"},
	// 			{id: v1(), userName: "Sister"},
	// 			{id: v1(), userName: "Mom"},
	// 			{id: v1(), userName: "Dad"},
	// 		],
	// 		messages: [
	// 			{id: v1(), message: "hi"},
	// 			{id: v1(), message: "How are you?"},
	// 			{id: v1(), message: "Good, thanks. And you?"},
	// 			{id: v1(), message: "How do you spell"},
	// 			{id: v1(), message: "What is learn? I'm learn React"},
	// 		],
	// 		newMessageText: ''
	// 	}
	// },
	// rerenderEntireTree() {
	// },
	// subscriber(observer) {
	// 	this.rerenderEntireTree = observer;
	// },
	// getState() {
	// 	return this._state
	// },
	// dispatch(action) {
	// 	this._state.profilePage = profileReducer(this._state.profilePage, action)
	// 	this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
	// 	this._state.menu = menuReducer(this._state.menu, action)
	//
	// 	this.rerenderEntireTree()
	// 	}

}
