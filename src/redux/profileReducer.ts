import {v1} from "uuid";


export type PostType = {
	id: string
	text: string
}

type ContactsType = {
	facebook: string | null
	website: string | null
	vk: string | null
	twitter: string | null
	instagram: string | null
	youtube: string | null
	github: string | null
	mainLink: string | null
}
type PhotosType = {
	small: string
	large: string
}

export type ResponseProfileType = {
	aboutMe: string
	contacts: ContactsType
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: string
	photos: PhotosType
}


const initialState = {
	profile: {
		aboutMe: "",
		contacts: {
			facebook: null,
			website: null,
			vk: null,
			twitter: null,
			instagram: null,
			youtube: null,
			github: null,
			mainLink: null
		},
		lookingForAJob: true,
		lookingForAJobDescription: "",
		fullName: "",
		userId: '2',
		photos: {
			small: "",
			large: ""
		}
	} as ResponseProfileType,
	post: [
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
	] as PostType[],
	newPostText: ''
}
export type ProfilePageType = typeof initialState
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

export const setUserProfileAC = ( profile: ResponseProfileType) => {
return {
	type: 'SET-USER-PROFILE',
	payload: {
		profile
	}
} as const
}
export type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof upDateNewPostAC> | ReturnType<typeof setUserProfileAC>

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
	switch (action.type) {
		case 'UPDATE-NEW-POST-TEXT':{
			return state = {...state, newPostText: action.newPostText}
		}
		case 'ADD-POST':{
			const newPost = {id: v1(), text: state.newPostText }
			return state = {...state, post: [...state.post, newPost], newPostText: ''}
		}
		case "SET-USER-PROFILE": {
			return {...state, profile: action.payload.profile }
		}
		default :
			return state
	}
	
}
