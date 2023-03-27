import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../../redux/reduxStore";
import { Users } from "./Users";
import { followUserAC, setUserAC, UserType} from "../../../redux/usersReducer";


type MapStateToPropsType = {
	users: UserType[]
}

type MapDispatchToProps = {
	followUser: (  userID: string ) => void
	setUser: (users: UserType[]) => void
}

const mapStateToProps = ( state: AppStateType ): MapStateToPropsType => {
	return {
		users: state.usersReducer
	}
}

const mapDispatchToProps = ( dispatch: Dispatch ): MapDispatchToProps => {
	return {
		followUser: ( userID: string ) => dispatch( followUserAC( userID ) ),
		setUser: (users:UserType[]) => dispatch( setUserAC(users) ),
	}
}

export const UsersContainer = connect( mapStateToProps, mapDispatchToProps )( Users )
