import { AppStateType } from "./reduxStore";

export const getUsers = (state: AppStateType) => {
	return state.usersReducer.users
}

export const getCurrentPage = (state: AppStateType) => {
	return state.usersReducer.currentPage
}

export const getTotalUserCount = (state: AppStateType) => {
	return state.usersReducer.totalUsersCount
}

export const getPageSize = (state: AppStateType) => {
	return state.usersReducer.pageSize
}

export const getIsFetching = (state: AppStateType) => {
	return state.usersReducer.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
	return state.usersReducer.followingInProgress
}

// users: state.usersReducer.users,
// 	currentPage: state.usersReducer.currentPage,
// 	totalUsersCount: state.usersReducer.totalUsersCount,
// 	pageSize: state.usersReducer.pageSize,
// 	isFetching: state.usersReducer.isFetching,
// 	followingInProgress: state.usersReducer.followingInProgress