import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";
import React from 'react';
import { toggleIsFetchingAC, unfollowUserAC, UserType } from "../../../redux/usersReducer";
import axios from "axios";
import { Users } from "./Users";
import {
	followUserAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	setUserAC,
	UsersPageType,
} from "../../../redux/usersReducer";
import { Preloader } from "../../common/Loader/Preloader";
import { usersAPI } from "../../../api/API";


export type UsersPropsType = {
	users: UserType[]
	currentPage: number
	totalUsersCount: number
	pageSize: number
	isFetching: boolean
	followUser: ( userID: string ) => void
	unfollowUser: ( userID: string ) => void
	setUser: ( users: UserType[] ) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
	toggleIsFetching: ( newIsFetching: boolean ) => void
};

// создание классовой компоненты, слово extends обязательно!
export class UsersComponent extends React.Component<UsersPropsType, UserType[]> { //наследование классовой компоненты у реакта
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
		
		// console.log( this.props.totalUsersCount )
		// console.log( this.props.pageSize )
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
						unfollowUser={ this.props.unfollowUser }/>
				}
			</>
		
		)
	}
}

const mapStateToProps = ( state: AppStateType ): UsersPageType => {
	// функция mapStateToProps возвращает объект со свойствами в которых лечат части нашего стейта
	return {
		users: state.usersReducer.users,
		pageSize: state.usersReducer.pageSize,
		totalUsersCount: state.usersReducer.totalUsersCount,
		currentPage: state.usersReducer.currentPage,
		isFetching: state.usersReducer.isFetching,
		followingInProgress: state.usersReducer.followingInProgress
	}
}

// const mapDispatchToProps = ( dispatch: Dispatch ): MapDispatchToProps => { // эта функция которая возвращает объкт со свойствами
// 	// в которых лежат колбеки которые диспатчат возврощаемые нашими экшенкриэйтор
// 	return {
// 		followUser: ( userID: string ) => dispatch( followUserAC( userID ) ),
// 		setUser: (users:UserType[]) => dispatch( setUserAC(users) ),
// 		setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
// 		setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
// 		toggleIsFetching: ( newIsFetching: boolean ) => dispatch( toggleIsFetchingAC( newIsFetching ) )
// 	}
// }
export const UsersContainer = connect( mapStateToProps, {
	followUser: followUserAC,
	unfollowUser: unfollowUserAC,
	setUser: setUserAC,
	setCurrentPage: setCurrentPageAC,
	setTotalUsersCount: setTotalUsersCountAC,
	toggleIsFetching: toggleIsFetchingAC
} )( UsersComponent )
//здесь ф-ция connect можно сказать обьеденяет наши два обьекта из mapDispatchToProps и mapStateToProps
// и делает из них обьект props который приходит в нашу презентационную компоненту


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
