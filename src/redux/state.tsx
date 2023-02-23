import {v1} from "uuid";
import {rerenderEntireTree} from "../render";

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
}
export type DialogsPageType = {
	dialogs: DialogPropsType[]
	messages: MessagesPropsType[]
}

export type DataPropsType = {
	menu: MenuType
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
}

export let data: DataPropsType = {
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
		]
	}
}
	    console.log(data.profilePage.posts)
export const addPost = (postMessage: string) => {
	let newPost = {
		id: v1(),
		text: postMessage
	}
	data.profilePage.posts.push(newPost)
	rerenderEntireTree(data)
}
