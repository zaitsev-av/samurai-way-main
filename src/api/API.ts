import axios from "axios";

const instance = axios.create( {
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: { 'API-KEY': 'b239e8ba-dfc8-4114-8b6e-bd66e6dd47bb' }
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
	me: () => instance.get(
			`auth/me`
		).then( ( response ) => response.data )
}

export const profileAPI = {
	getProfile: ( userID: number ) => instance.get( `profile/${ userID }` )
			.then(response => response.data)
			.catch(error =>     console.log(error))
	
}

