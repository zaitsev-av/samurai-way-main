import {v1} from "uuid";

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
							ReturnType<typeof addNewMessageAC> | ReturnType<typeof upDateNewMessageAC>
export type StoreType = {
	_data: DataPropsType
	rerenderEntireTree: () => void
	subscriber: (observer: () => void) => void
	getState: () => DataPropsType
	dispatch: (action: ActionsTypes) => void
}

export const addPostAC = () => {
	return {
		type: 'ADD-POST'
	} as const
}

export const upDateNewPostAC = (newPostText: string) => {
	return {
		type: 'UPDATE-NEW-POST-TEXT',
		newPostText: newPostText
	}as const
}

export const addNewMessageAC = () => {
	return {
		type: 'ADD-NEW-MESSAGE'
	}as const
}

export const upDateNewMessageAC = (newMessageText: string) => {
	return {
		type: 'UPDATE-MEW-MESSAGE-TEXT',
		newMessageText: newMessageText
	}as const
}

export const store: StoreType = {
	_data: {
		menu: {
			menuPages: [
				"Profile", 'Messages', 'News', 'Music', 'Settings'
			]
		},
		profilePage: {
			posts: [
				{
					id: v1(),
					text: "Lorem ipsum diam massa — proin maecenas ligula gravida non pharetra, elementum tellus malesuada tellus integer. "
				},
				{
					id: v1(),
					text: "Magna curabitur nec pellentesque tellus quam at sagittis commodo eu commodo metus fusce sed quisque rutrum vitae tellus bibendum justo tellus."
				},
				{
					id: v1(),
					text: "Nam ultricies bibendum porta, orci eu leo quisque enim eros molestie gravida et elementum duis."
				},
			],
			newPostText: 'it.kamasutra.com'
		},
		dialogsPage: {
			dialogs: [
				{id: v1(), userName: "Alexandr"},
				{id: v1(), userName: "Viktoria"},
				{id: v1(), userName: "Sister"},
				{id: v1(), userName: "Mom"},
				{id: v1(), userName: "Dad"},
			],
			messages: [
				{id: v1(), message: "hi"},
				{id: v1(), message: "How are you?"},
				{id: v1(), message: "Good, thanks. And you?"},
				{id: v1(), message: "How do you spell"},
				{id: v1(), message: "What is learn? I'm learn React"},
			],
			newMessageText: ''
		}
	},
	rerenderEntireTree() {
	},
	subscriber(observer) {
		this.rerenderEntireTree = observer;
	},
	getState() {
		return this._data
	},
	dispatch(action) {
		switch (action.type) {
			case 'ADD-POST':
				const newPost = {
					id: v1(),
					text: this._data.profilePage.newPostText
				}
				this._data.profilePage.posts.push(newPost)
				this._data.profilePage.newPostText = ''
				this.rerenderEntireTree()
				break
			case 'UPDATE-NEW-POST-TEXT':
				this._data.profilePage.newPostText = action.newPostText
				this.rerenderEntireTree()
				break
			case 'ADD-NEW-MESSAGE':
				const newMessage = {id: v1(), message: this._data.dialogsPage.newMessageText}
				this._data.dialogsPage.messages.push(newMessage)
				this._data.dialogsPage.newMessageText = ''
				this.rerenderEntireTree()
				break
			case 'UPDATE-MEW-MESSAGE-TEXT':
				this._data.dialogsPage.newMessageText = action.newMessageText
				this.rerenderEntireTree()
		}
	}
}
