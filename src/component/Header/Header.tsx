import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";


type HeaderPropsType = {
	isAuth: boolean
	login: string | null
	logoutTC: ()=> void
}
export const Header: React.FC<HeaderPropsType> = ( props ) => {
	const { isAuth, login , logoutTC} = props
	console.log( login )
	const onClickLogout = () => {
		logoutTC()
	}
	return (
		<header className={ s.header }>
			<div className={ s.headerTitle }>
				<h2 className={ s.transparent }>{ 'Socialympics' } </h2>
			</div>
			<div className={s.loginWrapper}>
			{ isAuth
				?
				<span className={s.login}>
						<NavLink to={ `/profile/28474` }>{ login }</NavLink>
						<button onClick={onClickLogout}>LogOut</button>
					</span>
				:
				<NavLink to={ `/login` }>Login</NavLink>
			}
			</div>
		</header>
	)
}

