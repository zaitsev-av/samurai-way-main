import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";
import React from 'react';
import { toggleFollowingProgressAC, toggleIsFetchingAC, unfollowUserAC, UserType } from "../../../redux/usersReducer";
import { Users } from "./Users";
import {
	followUserAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	setUserAC,
} from "../../../redux/usersReducer";
import { Preloader } from "../../common/Loader/Preloader";
import { usersAPI } from "../../../api/API";


export type UsersPropsType = {
	users: UserType[]
	currentPage: number
	totalUsersCount: number
	pageSize: number
	isFetching: boolean
	followingInProgress: number[]
	followUser: ( userID: number ) => void
	unfollowUser: ( userID: number ) => void
	setUser: ( users: UserType[] ) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
	toggleIsFetching: ( newIsFetching: boolean ) => void
	toggleFollowingProgress: ( progress: boolean, userID: number ) => void
};

// создание классовой компоненты, слово extends обязательно!
class UsersContainer extends React.Component<UsersPropsType, UserType[]> { //наследование классовой компоненты у реакта
	componentDidMount() {
		this.props.toggleIsFetching(true) // при запросе на сервер во время
		// ожидания ответа включается лоадер
			usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then (data => {
				this.props.setUser( data.items )
				this.props.setTotalUsersCount( data.totalCount )
				this.props.toggleIsFetching(false)//убирает лоадер с страницы
			})
		}// запрос на сервер за юзерами
		
	
	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
				this.props.setUser( data.items )
				this.props.toggleIsFetching(false)
			})
			
	}
	render() {
		
		let pageCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize )
		let pages = []
		
		for ( let i = 1; i <= pageCount; i++ ) {
			pages.push( i )
		}
		// console.log( pages )
		return (
			<>
				{ this.props.isFetching ? <Preloader/> :
					<Users
						users={ this.props.users }
						pages={ pages }
						currentPage={ this.props.currentPage }
						onPageChanged={ this.onPageChanged }
						followUser={ this.props.followUser }
						unfollowUser={ this.props.unfollowUser }
						toggleFollowingProgress={this.props.toggleFollowingProgress}
						followingInProgress={this.props.followingInProgress}
					/>
					
				}
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
const mapDispatchToProps = {
	followUser: followUserAC,
	unfollowUser: unfollowUserAC,
	setUser: setUserAC,
	setCurrentPage: setCurrentPageAC,
	setTotalUsersCount: setTotalUsersCountAC,
	toggleIsFetching: toggleIsFetchingAC,
	toggleFollowingProgress: toggleFollowingProgressAC,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersContainer);

// export const Users: React.FC<UsersPropsType> = ( props ) => {
// 	const { users, followUser, setUser } = props
// 	useEffect( () => {
// 		axios.get( 'https://social-network.samuraijs.com/api/1.0/users' ).then(
// 			response => setUser( response.data.items ) )
// 	}, [ setUser ] )
//
//
//
// };
