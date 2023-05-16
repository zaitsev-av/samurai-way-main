import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";
import React, { ComponentType } from 'react';
import { follow,	getUserThunkCreater, unfollow,	UserType } from "../../../redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from "../../common/Loader/Preloader";
import { setUserIdAC } from "../../../redux/profileReducer";
import { compose } from "redux";
import { AuthRedirectComponent } from "../../../hoc/AuthRedirect";


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
		this.props.getUserThunk( this.props.currentPage, this.props.pageSize )
		}// запрос на сервер за юзерами
		
	
	onPageChanged = (pageNumber: number) => {
		this.props.getUserThunk( pageNumber, this.props.pageSize )
	}
	render() {
		
		let pageCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize )
		let pages = []
		for ( let i = 1; i <= pageCount; i++ ) {
			pages.push( i )
		}
		return (
			<>
					<Users
						users={ this.props.users }
						pages={ pages }
						currentPage={ this.props.currentPage }
						onPageChanged={ this.onPageChanged }
						followingInProgress={ this.props.followingInProgress }
						follow={ this.props.follow }
						unfollow={ this.props.unfollow }
						setUserID={ this.props.setUserID }
						isFetching={ this.props.isFetching }
					/>
			</>
		
		)
	}
}
const mapStateToProps = (state: AppStateType) => ({
	users: state.usersReducer.users,
	currentPage: state.usersReducer.currentPage,
	totalUsersCount: state.usersReducer.totalUsersCount,
	pageSize: state.usersReducer.pageSize,
	isFetching: state.usersReducer.isFetching,
	followingInProgress: state.usersReducer.followingInProgress
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

