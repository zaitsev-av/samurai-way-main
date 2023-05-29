import React from 'react';
import { Header } from "./Header";
import { AppStateType } from "../../redux/reduxStore";
import { connect } from "react-redux";
import { getUsersAuthData, logOutTC } from "../../redux/auth-reducer";

export type HeaderContainerPropsType = {
	isAuth: boolean
	login: string | null
	logoutTC: () => void
};

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
	
	render() {
		return <Header isAuth={this.props.isAuth} login={this.props.login} logoutTC={this.props.logoutTC}/>
	}
}

const mapStateToProps = ( state: AppStateType ) => ( {
	isAuth: state.authReducer.isAuth,
	login: state.authReducer.login
} )

export default connect(
	mapStateToProps,
	{
		getUsersAuthData,
		logoutTC: logOutTC
	}
)(HeaderContainer);