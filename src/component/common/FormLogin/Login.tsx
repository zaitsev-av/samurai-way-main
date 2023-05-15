import React from 'react';
import s from './FormLogin.module.css'
import { FormLoginType, LoginReduxForm } from "./FormLogin";

export const Login: React.FC = ( props ) => {
	const onSubmit = ( formData: FormLoginType) => {
		    console.log(formData)
	}
	return (
			<div className={ s.loginBox }>
				<LoginReduxForm onSubmit={onSubmit}/>
			</div>
	);
};