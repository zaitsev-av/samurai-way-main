import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";
import React from 'react';
import { follow,	getUserThunkCreater, unfollow,	UserType } from "../../../redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from "../../common/Loader/Preloader";


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
				{ this.props.isFetching ? <Preloader/> :
					<Users
						users={ this.props.users }
						pages={ pages }
						currentPage={ this.props.currentPage }
						onPageChanged={ this.onPageChanged }
						followingInProgress={ this.props.followingInProgress }
						follow={ this.props.follow }
						unfollow={ this.props.unfollow }
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

export default connect(
	mapStateToProps,
	{
		getUserThunk: getUserThunkCreater,
		follow,
		unfollow
	}
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
