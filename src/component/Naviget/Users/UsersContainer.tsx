import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../../redux/reduxStore";
import { Users } from "./Users";
import { followUserAC, setCurrentPageAC, setUserAC, UsersPageType, UserType } from "../../../redux/usersReducer";


type MapDispatchToProps = {
	followUser: (  userID: string ) => void
	setUser: (users: UserType[]) => void
	setCurrentPage: (currentPage: number) => void
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
		setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage))
	}
}

export const UsersContainer = connect( mapStateToProps, mapDispatchToProps )( Users )
