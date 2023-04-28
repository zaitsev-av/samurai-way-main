import React, { ComponentType } from "react";
import { AppStateType } from "../redux/reduxStore";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state:AppStateType): {isAuth: boolean} =>
	({isAuth: state.authReducer.isAuth})

export function AuthRedirectComponent<T> (Component: ComponentType<T>) {
	const RedirectComponent = (props: {isAuth: boolean}) => {
		const {isAuth,  ...restProps} = props
		return !isAuth ? <Redirect to= '/login'/> : <Component {...restProps as T}/>
	}
	return connect (mapStateToProps)(RedirectComponent)
}