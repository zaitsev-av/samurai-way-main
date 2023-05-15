import React from 'react';
import s from './FormLogin.module.css'
import { NavLink } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

export type FormLoginType = {
	login: string
	password: string
	rememberMe: boolean
}

export const FormLogin: React.FC <InjectedFormProps<FormLoginType>> = (props ) => {
	return (
				<form onSubmit={props.handleSubmit}>
					<div className={ s.userBox }>
						<Field name="Login" placeholder={'Login'} component={'input'}/>
						<label>Login</label>
					</div>
					<div className={ s.userBox }>
						<Field name="text" placeholder={'Name'} component={'input'}/>
							<label>Name</label>
					</div>
					<div className={s.userBox}>
						<Field name="password" placeholder={'Password'} component={'input'}/>
							<label>Password</label>
					</div>
					<div className={s.checkBox}>
						<label>remember me</label>
						<Field type="checkbox" component={'input'}/>
					</div>
					<div>
						<NavLink to="#">
							SEND
							<span></span>
						</NavLink>
					</div>
				</form>
	)
};
export const LoginReduxForm = reduxForm<FormLoginType>({
	form: "login user"
}) (FormLogin)