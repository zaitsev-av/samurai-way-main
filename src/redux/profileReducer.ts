import { DispatchType } from "./reduxStore";
import { profileAPI } from "../api/API";
import { Dispatch } from "redux";


export type PostType = {
	id: string
	text: string
}

export type ProfilePageType = {
	profile: ProfileType
	status: string
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



const initialState: ProfilePageType= {
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
	status: ''
}

export type ActionType =  ReturnType<typeof upDateNewPostAC> | ReturnType<typeof setUserProfileAC>
	| ReturnType<typeof setUserIdAC> | ReturnType<typeof setStatusAC>

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
	switch (action.type) {
		case 'UPDATE-NEW-POST-TEXT':{
			return state = {...state, status: action.status}
		}
		// case 'ADD-POST':{
		// 	const newPost = {id: v1(), text: state.status }
		// 	return state = {...state, post: [...state.post, newPost], newPostText: ''}
		// }
		case "SET-USER-PROFILE": {
			return { ...state, profile: action.payload.profile }
		}
		case "SET-USER-ID": {
			return { ...state, profile: { ...state.profile, userId: action.payload.userID } }
		}
		case "SET-STATUS": {
			debugger
			return {...state, status: action.payload.status}
		}
		default :
			return state
	}
	
}

export const addPostAC = () => {
	return {
		type: 'ADD-POST'
	} as const
}
export const upDateNewPostAC = (newPostText: string) => {
	return {
		type: 'UPDATE-NEW-POST-TEXT',
		status: newPostText
	}as const
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