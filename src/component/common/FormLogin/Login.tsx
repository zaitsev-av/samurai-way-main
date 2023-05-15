import React from 'react';
import s from './FormLogin.module.css'
import { FormLoginType, LoginReduxForm } from "./FormLogin";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";
import { NavLink } from "react-router-dom";
import { loginTC } from "../../../redux/auth-reducer";

export const Login: React.FC = ( props ) => {
	const isAuth = useSelector<AppStateType, boolean>(state => state.authReducer.isAuth)
	const dispatch = useDispatch()
	const onSubmit = ( formData: FormLoginType) => {
		dispatch(loginTC(formData.email, formData.password, formData.rememberMe))
		    console.log(formData)
	}
	
	if ( isAuth ) {
		return <NavLink to={ '/profile' }/>
	}
	return (
			<div className={ s.loginBox }>
				<LoginReduxForm onSubmit={onSubmit}/>
			</div>
	);
};