import { DispatchType } from "./reduxStore";
import { profileAPI } from "../api/API";


export type PostType = {
	id: string
	text: string
}

// type ContactsType = {
// 	facebook: string | null
// 	website: string | null
// 	vk: string | null
// 	twitter: string | null
// 	instagram: string | null
// 	youtube: string | null
// 	github: string | null
// 	mainLink: string | null
// }
// type PhotosType = {
// 	small: string
// 	large: string
// }
//
// export type ResponseProfileType = {
// 	aboutMe: string
// 	contacts: ContactsType
// 	lookingForAJob: boolean
// 	lookingForAJobDescription: string
// 	fullName: string
// 	userId: string
// 	photos: PhotosType
// }

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

// const initialState : = {
// 	profile: {
// 		aboutMe: "",
// 		contacts: {
// 			facebook: null,
// 			website: null,
// 			vk: null,
// 			twitter: null,
// 			instagram: null,
// 			youtube: null,
// 			github: null,
// 			mainLink: null
// 		},
// 		lookingForAJob: true,
// 		lookingForAJobDescription: "",
// 		fullName: "",
// 		userId: '2',
// 		photos: {
// 			small: "",
// 			large: ""
// 		}
// 	},
// 	status: ''
// }
// export type ProfilePageType = typeof initialState

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
| ReturnType<typeof setUserIdAC>

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
			return {...state, profile: action.payload.profile }
		}
		case "SET-USER-ID": {
			return {...state, profile: {...state.profile, userId: action.payload.userID}}
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

export const setUserIdAC = (userID: number) => {
	return {
		type: "SET-USER-ID",
		payload: {
			userID
		}
	} as const
}
export const getProfileInfo = ( userID: number) => ( dispatch: DispatchType)=> {
	profileAPI.getProfile(userID)
		.then(data => {
			console.log(data)
			dispatch(setUserProfileAC(data))
		})
}
