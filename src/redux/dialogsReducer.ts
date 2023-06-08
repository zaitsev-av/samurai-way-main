import {v1} from "uuid";

const initialState = {
	dialogs: [
		{id: v1(), userName: "Alexandr"},
		{id: v1(), userName: "Viktoria"},
		{id: v1(), userName: "Sister"},
		{id: v1(), userName: "Mom"},
		{id: v1(), userName: "Dad"},
	] as DialogPropsType[],
	messages: [
		{id: v1(), message: "hi"},
		{id: v1(), message: "How are you?"},
		{id: v1(), message: "Good, thanks. And you?"},
		{id: v1(), message: "How do you spell"},
		{id: v1(), message: "What is learn? I'm learn React"},
	] as MessagesPropsType[],
	newMessageText: ""
}

export const dialogsReducer = (state: DialogsType = initialState, action:ActionType): DialogsType => {
	switch (action.type) {
			case 'dialog/ADD-NEW-MESSAGE': {
				const newMessage = { id: v1(), message: action.values}
				return state = { ...state, messages: [ ...state.messages, newMessage ], newMessageText: '' }
			}
		case 'dialog/UPDATE-MEW-MESSAGE-TEXT': {
			return state = {...state, newMessageText: action.newMessageText}
			// state.dialogsPage.newMessageText = action.newMessageText
		}
		default:
			return state
	}
}

export const addNewMessageAC = (values: string) => {
	return {
		type: 'dialog/ADD-NEW-MESSAGE',
		values
	}as const
}

export const updateNewMessageAC = ( newMessageText: string ) => {
	return {
		type: 'dialog/UPDATE-MEW-MESSAGE-TEXT',
		newMessageText
	} as const
}

//types
type ActionType = ReturnType<typeof addNewMessageAC> | ReturnType<typeof updateNewMessageAC>

export type MessagesPropsType = {
	id: string
	message: string
}

export type DialogPropsType = {
	id: string
	userName: string
}

export type DialogsType = typeof initialState
// export type InitialStateType = typeof initialState