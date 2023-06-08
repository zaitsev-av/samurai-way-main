import {
	addPostAC,
	ProfilePageType,
	profileReducer,
	ProfileType, setStatusAC,
	setUserIdAC,
	setUserProfileAC
} from "./profileReducer";
import { v1 } from "uuid";

let initialState: ProfilePageType
beforeEach(()=> {
	initialState = {
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
		posts: [
			{
				id: v1(),
				text: 'As a developer, I possess the skills necessary to create high-quality software products. I can effectively solve problems and quickly adapt to new technologies. I am confident that my dedication and diligence will help me successfully tackle any challenges that may arise during my work as a developer.'
			}
		],
		newPostText: ''
	}
})


test('should correctly add a new post', ()=> {
	const newState = profileReducer(initialState, addPostAC('new post text'))
	expect (newState.posts.length).toBe(2)
	expect (initialState.posts.length).toBe(1)
})

test('should correctly update user info', ()=> {
	
	const profile: ProfileType = {
		userId: 28474,
		lookingForAJob: true,
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
			small: 'new img',
			large: ''
		}
	}
	
	const newState = profileReducer(initialState, setUserProfileAC(profile))
	expect (newState.profile.lookingForAJob).toBeTruthy()
	expect (newState.profile.photos.small).toBe('new img')
	expect (initialState.profile.lookingForAJob).toBeFalsy()
	expect (initialState.profile.photos.small).toBe('')
})

test('should correctly established user id', ()=> {
	
	const userID: number = 1111
	
	const newState = profileReducer(initialState, setUserIdAC(userID))
	expect (newState.profile.userId).toBe(userID)
	expect (initialState.profile.userId).toBe(28474)
})

test('should correctly update user status', ()=> {
	
	const newProfileStatus: string = 'new status'
	
	const newState = profileReducer(initialState, setStatusAC(newProfileStatus))
	expect (newState.status).toBe(newProfileStatus)
	expect (initialState.status).toBe('')
})