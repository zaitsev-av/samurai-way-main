import React from 'react';
import { Header } from "./Header";
import { AppStateType } from "../../redux/reduxStore";
import { connect } from "react-redux";
import { getUsersAuthData } from "../../redux/auth-reducer";

export type HeaderContainerPropsType = {
	getUsersAuthData: () => void
	isAuth: boolean
	login: string|null
};

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
	componentDidMount() {
		this.props.getUsersAuthData()
	}
	
	render() {
		return <Header isAuth={this.props.isAuth} login={this.props.login}/>
	}
};

const mapStateToProps = ( state: AppStateType ) => ( {
	isAuth: state.authReducer.isAuth,
	login: state.authReducer.login
} )

export default connect(
	mapStateToProps,
	{
		getUsersAuthData
	}
)(HeaderContainer);