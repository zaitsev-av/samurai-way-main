import {v1} from "uuid";
// let rerenderEntireTree = ( ) => {
//
// }

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
export type StoreType = {
	_data: DataPropsType
	rerenderEntireTree: ()=> void
	addPost: ()=> void
	updateNewPostText:(newPostText: string)=> void
	addNewMassage: ()=> void
	updateNewMessageText: (newMessageText: string)=> void
	subscriber: (observer: () => void)=> void
	getState: () => DataPropsType

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
	addPost() {
		let newPost = {
			id: v1(),
			text: this._data.profilePage.newPostText
		}
		this._data.profilePage.posts.push(newPost)
		this._data.profilePage.newPostText = ''
		this.rerenderEntireTree()
	},
	updateNewPostText(newPostText: string) {
		this._data.profilePage.newPostText = newPostText
		this.rerenderEntireTree()
	},
	addNewMassage() {
		const newMessage = {id: v1(), message: this._data.dialogsPage.newMessageText}
		this._data.dialogsPage.messages.push(newMessage)
		this._data.dialogsPage.newMessageText = ''
		this.rerenderEntireTree()
	},
	updateNewMessageText(newMessageText: string) {
		this._data.dialogsPage.newMessageText = newMessageText
		this.rerenderEntireTree()
	},
	subscriber(observer) {
		this.rerenderEntireTree = observer;
	},
	getState() {
		return this._data
	}
}

// export let data: DataPropsType = {
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
// 		newPostText: 'it.kamasutra.com'
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
// }
// console.log(data.profilePage.posts)
// export const addPost = () => {
// 	let newPost = {
// 		id: v1(),
// 		text: data.profilePage.newPostText
// 	}
// 	data.profilePage.posts.push(newPost)
// 	data.profilePage.newPostText = ''
// 	rerenderEntireTree()
// }

// export const updateNewPostText = (newPostText: string) => {
// 	data.profilePage.newPostText = newPostText
// 	rerenderEntireTree()
// }

// export const addNewMassage = () => {
// 	const newMessage = {id: v1(), message: data.dialogsPage.newMessageText}
// 	data.dialogsPage.messages.push(newMessage)
// 	data.dialogsPage.newMessageText = ''
// 	rerenderEntireTree()
// }

// export const updateNewMessageText = (newMessageText: string) => {
// 	data.dialogsPage.newMessageText = newMessageText
// 	rerenderEntireTree()
// }


// export const subscriber = (observer: () => void) => {
// 	rerenderEntireTree = observer;
// }
