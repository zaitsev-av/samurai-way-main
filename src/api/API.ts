import axios from "axios";

const instance = axios.create( {
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: { 'API-KEY': '2982f94d-1667-4567-ac00-6b85d50bebfa' }
} ) // настраиваем инстанс

export const usersAPI = {
	getUsers: ( currentPage: number = 1, pageSize: number = 10) => {
		return instance.get(
				`users?page=${ currentPage }&count=${ pageSize }`)
			.then( response => response.data)
	},
	follow: (id: number) => {
		return instance.post(`follow/${id}`)
			.then( response => response.data.resultCode)
	},
	unfollow: (id: number) => {
		return instance.delete(`follow/${id}`)
			.then( response => response.data.resultCode)
	}
}

export const authAPI = {
	setUser: () => {
		return instance.get(
			`auth/me`
		).then( ( response ) => response.data )
	}
}

export const profileAPI = {
	getProfile: ( userID: number ) => instance.get( `profile/${ userID }` )
			.then(response => response.data)
			.catch(error =>     console.log(error))
	
}

