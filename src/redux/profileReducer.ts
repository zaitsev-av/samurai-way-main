import { profileAPI } from "../api/API";
import { Dispatch } from "redux";
import { v1 } from "uuid";


export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
	switch (action.type) {
		case 'ADD-POST':{
			const newPost = {id: v1(), text: action.payload.text }
			return state = {...state, posts: [newPost, ...state.posts], newPostText: ''}
		}
		case "SET-USER-PROFILE": {
			return { ...state, profile: action.payload.profile }
		}
		case "SET-USER-ID": {
			return { ...state, profile: { ...state.profile, userId: action.payload.userID } }
		}
		case "SET-STATUS": {
			return {...state, status: action.payload.status}
		}
		default :
			return state
	}
	
}
//actions
export const addPostAC = (text: string) => {
	return {
		type: 'ADD-POST',
		payload: {text}
	} as const
}
export const setUserProfileAC = ( profile: any) => {
	return {
		type: 'SET-USER-PROFILE',
		payload: {
			profile
		}
	} as const
}

export const setUserIdAC = ( userID: number ) => {
	return {
		type: "SET-USER-ID",
		payload: {
			userID
		}
	} as const
}
export const setStatusAC = ( status: string ) => {
	return {
		type: "SET-STATUS",
		payload: { status }
	} as const
}
//thunks
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
	try {
		const response = await profileAPI.getStatus(userId);
		dispatch(setStatusAC(response));
	} catch (error) {
		console.warn(error);
	}
};

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
	try {
		    console.log(`updateStatus called ${status}`)
		const response = await profileAPI.updateStatus(status);
		if (response.data.resultCode === 0) {
			dispatch(setStatusAC(status));
		}
	} catch (error) {
		console.warn(error);
	}
};

export const getProfileInfo = (userID: number) => async (dispatch: Dispatch) => {
	try {
		const response = await profileAPI.getProfile(userID);
		dispatch(setUserProfileAC(response));
	} catch (error) {
		console.warn(error);
	}
};

//types

export type PostType = {
	id: string
	text: string
}

export type ProfilePageType = {
	profile: ProfileType
	status: string
	posts: PostType[],
	newPostText: string
}
export type ProfileType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: {},
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
	photos: {
		small: string
		large: string
	}
}
//для того чтобы страница была не пустая
let mePosts: PostType[] = [
	{
		id: v1(),
		text: 'As a developer, I possess the skills necessary to create high-quality software products. I can effectively solve problems and quickly adapt to new technologies. I am confident that my dedication and diligence will help me successfully tackle any challenges that may arise during my work as a developer.'
	},
	{
		id: v1(),
		text: 'React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by a community of developers. React allows developers to create reusable UI components and manage the state of those components efficiently. React uses a declarative approach to building components, meaning that developers describe what they want the UI to look like and React handles the rest. React has become a popular choice for building web applications due to its flexibility, performance, and large developer community.'
	},
	{
		id: v1(),
		text: 'TypeScript is a syntactical extension to JavaScript that adds static typing. It allows developers to catch errors during compilation rather than just during runtime. This simplifies debugging and reduces the number of errors that can occur when running code. TypeScript also has great tooling support such as code editors and IDEs. It enables the development of large applications with simpler and more understandable code, making it more suitable for larger teams of developers'
	},
]
const initialState: ProfilePageType = {
	profile: {
		userId: 28474,
		lookingForAJob: false,
		lookingForAJobDescription: '',
		fullName: '',
		contacts: {},
		github: '',
		vk: '',
		facebook: '',
		instagram: '',
		twitter: '',
		website: '',
		youtube: '',
		mainLink: '',
		photos: {
			small: '',
			large: ''
		}
	},
	status: '',
	posts: [ ...mePosts ],
	newPostText: ''
}

export type ActionType =
	| ReturnType<typeof setUserProfileAC>
	| ReturnType<typeof setUserIdAC>
	| ReturnType<typeof setStatusAC>
	| ReturnType<typeof addPostAC>