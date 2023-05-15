import axios from "axios";
import { setStatusAC } from "../redux/profileReducer";

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
		).then( ( response ) => response.data ),
	login: (email: string, password: string, rememberMe: boolean = false) => instance.post('auth/login', {email, password, rememberMe} )
		.then(res => res.data),
	logout: () => instance.delete('auth/login')
		.then(res => res.data)
}

export const profileAPI = {
	getProfile(userID: number) {
		return instance.get(`profile/${userID}`)
			.then(response => response.data)
			.catch(error => {
				console.log(error);
			});
	},
	updateStatus(status: string) {
		return instance.put(`profile/status`, {status})
	},
	getStatus(userID: number) {
		return instance.get(`profile/status/${userID}`)
			.then(response => response.data);
	}
};

