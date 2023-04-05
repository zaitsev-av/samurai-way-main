import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../../redux/reduxStore";
import React from 'react';
import { UserType } from "../../../redux/usersReducer";
import axios from "axios";
import { Users } from "./Users";
import {
	followUserAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	setUserAC,
	UsersPageType,
} from "../../../redux/usersReducer";


export type UsersPropsType = {
	users: UserType[]
	currentPage: number
	totalUsersCount: number
	pageSize: number
	followUser: ( userID: string ) => void
	setUser: ( users: UserType[] ) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
};

type MapDispatchToProps = {
	followUser: (  userID: string ) => void
	setUser: (users: UserType[]) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
}
// создание классовой компоненты, слово extends обязательно!
export class UsersComponent extends React.Component<UsersPropsType, UserType[]> { //наследование классовой компоненты у реакта
	componentDidMount() {
		axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}` )
			.then( response => {
				this.props.setUser( response.data.items )
				console.log(this.props.setTotalUsersCount( response.data.totalCount ))
				this.props.setTotalUsersCount( response.data.totalCount )
			})
	}// запрос на сервер за юзерами
	
	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}` )
			.then( response => this.props.setUser( response.data.items ));
	}
	render() {
		
		console.log(this.props.totalUsersCount)
		console.log(this.props.pageSize)
		let pageCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize )
		let pages = []
		
		for ( let i = 1; i <= pageCount; i++ ) {
			pages.push( i )
		}
		console.log(pages)
		return <Users
			users={this.props.users}
			pages={pages}
			currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged}
			followUser={this.props.followUser}
		/>
	}
}

const mapStateToProps = ( state: AppStateType ): UsersPageType => {
	return {
		users: state.usersReducer.users,
		pageSize: state.usersReducer.pageSize,
		totalUsersCount: state.usersReducer.totalUsersCount,
		currentPage: state.usersReducer.currentPage,
		isFetching: state.usersReducer.isFetching,
		followingInProgress: state.usersReducer.followingInProgress
	}
}

const mapDispatchToProps = ( dispatch: Dispatch ): MapDispatchToProps => {
	return {
		followUser: ( userID: string ) => dispatch( followUserAC( userID ) ),
		setUser: (users:UserType[]) => dispatch( setUserAC(users) ),
		setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
		setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount))
	}
}
export const UsersContainer = connect( mapStateToProps, mapDispatchToProps )( UsersComponent )






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
