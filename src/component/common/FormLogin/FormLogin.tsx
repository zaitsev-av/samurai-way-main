import React from 'react';
import s from './FormLogin.module.css'
import { NavLink } from "react-router-dom";

export type FormLoginPropsType = {

};
export const FormLogin: React.FC<FormLoginPropsType> = ( props ) => {
	const {} = props
	return (
		
			<div className={ s.loginBox }>
				<form>
					<div className={ s.userBox }>
						<input type="text"/>
						<label>Email</label>
					</div>
					<div className={ s.userBox }>
						<input type="text"/>
							<label>Username</label>
					</div>
					<div className={s.userBox}>
						<input type="password"/>
							<label>Password</label>
					</div>
					<div>
						<NavLink to="#">
							SEND
							<span></span>
						</NavLink>
					</div>
				</form>
			</div>
	);
};