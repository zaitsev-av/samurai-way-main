import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";
import React, { ComponentType } from 'react';
import { follow,	getUserThunkCreater, unfollow,	UserType } from "../../../redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from "../../common/Loader/Preloader";
import { setUserIdAC } from "../../../redux/profileReducer";
import { compose } from "redux";
import { AuthRedirectComponent } from "../../../hoc/AuthRedirect";
import {
	getCurrentPage, getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUserCount,
	getUsers
} from "../../../redux/users-selectors";


export type UsersPropsType = {
	users: UserType[]
	currentPage: number
	totalUsersCount: number
	pageSize: number
	isFetching: boolean
	followingInProgress: number[]
	getUserThunk: ( currentPage: number, pageSize: number ) => void
	follow: ( userID: number ) => void
	unfollow: ( userID: number ) => void
	setUserID: (userID: number) => void
};

// создание классовой компоненты, слово extends обязательно!
class UsersContainer extends React.Component<UsersPropsType, UserType[]> { //наследование классовой компоненты у реакта
	
	componentDidMount() {
		const {currentPage,pageSize, getUserThunk} = this.props
		getUserThunk( currentPage, pageSize )
		}// запрос на сервер за юзерами
		
	
	onPageChanged = (pageNumber: number) => {
		const {pageSize,getUserThunk } = this.props
		getUserThunk( pageNumber, pageSize )
	}
	render() {
		const {totalUsersCount, pageSize,
			users, currentPage,
			followingInProgress,follow,
			unfollow, isFetching, setUserID
		} = this.props
		
		let pageCount = Math.ceil( totalUsersCount / pageSize )
		let pages = []
		for ( let i = 1; i <= pageCount; i++ ) {
			pages.push( i )
		}
		return (
			<>
					<Users
						users={ users }
						pages={ pages }
						currentPage={ currentPage }
						onPageChanged={ this.onPageChanged }
						followingInProgress={ followingInProgress }
						follow={ follow }
						unfollow={ unfollow }
						setUserID={ setUserID }
						isFetching={ isFetching }
					/>
			</>
		
		)
	}
}
const mapStateToProps = (state: AppStateType) => ({
	users: getUsers(state),
	currentPage: getCurrentPage(state),
	totalUsersCount: getTotalUserCount(state),
	pageSize: getPageSize(state),
	isFetching: getIsFetching(state),
	followingInProgress: getFollowingInProgress(state)
});
export default compose<ComponentType>(connect(
	mapStateToProps,
	{
		getUserThunk: getUserThunkCreater,
		follow,
		unfollow,
		setUserID: setUserIdAC
	}),
	AuthRedirectComponent
	)(UsersContainer)

//  connect(
// 	mapStateToProps,
// 	{
// 		getUserThunk: getUserThunkCreater,
// 		follow,
// 		unfollow,
// 		setUserID: setUserIdAC
// 	}
// )(UsersContainer);

