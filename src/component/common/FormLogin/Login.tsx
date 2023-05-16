import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";
import { loginTC } from "../../../redux/auth-reducer";
import { NavLink } from "react-router-dom";
import s from "./Login.module.css";

type Inputs = {
	login: string,
	password: string,
	rememberMe: boolean,
	captcha: string
};


export const Login: React.FC = ()  => {
	const dispatch = useDispatch()
	const isAuth = useSelector<AppStateType, boolean>( state => state.authReducer.isAuth )
	// const isCaptcha = useAppSelector( state => state.auth.captchaURL )// пока не сделал
	// let errorMessage = useAppSelector( state => state.auth.errorMessage )
	
	const { register, handleSubmit, watch,
		reset, formState: { errors } } = useForm<Inputs>();
	
	const onSubmit: SubmitHandler<Inputs> = ( data ) => {
		dispatch( loginTC( data.login, data.password, data.rememberMe ) )
		reset()
	};
	
	
	if ( isAuth ) {
		return <NavLink to={ '/profile' }/>
	}
	
	return (
		<>
			
			<div>
				<h1>LOGIN</h1>
				{/*{ errorMessage && <h3 style={ { color: 'red' } }>{ errorMessage }</h3> }*/}
			</div>
			
			<div className={s.loginBox}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={ s.userBox }>
						<input  placeholder={'Login'} { ...register( "login" )} />
						<label>Login</label>
					</div>
					{/*<div className={ s.userBox }>*/}
					{/*	<Field name="text" placeholder={'Name'} component={'input'} />*/}
					{/*		<label>Name</label>*/}
					{/*</div>*/}
					<div className={s.userBox}>
						<input type={"password"} placeholder={'Password'} { ...register( "password", { required: true } ) } />
						<label>Password</label>
					</div>
					<div className={s.checkBox}>
						<label>remember me</label>
						<input type="checkbox" { ...register( "rememberMe" ) }/>
					</div>
					<div>
						<input type="submit" className={s.submitBtn}/>
					</div>
				</form>
					{ errors.password && <span>This field is required</span> }
					
					{/*{ isCaptcha &&*/}
					{/*						<div>*/}
					{/*									<img src={ isCaptcha }*/}
					{/*											 alt="captcha"/>*/}
					{/*									<input placeholder={ 'captcha' }  { ...register( "captcha", ) } />*/}
					{/*						</div>*/}
					{/*	*/}
					{/*	*/}
					{/*}*/}
					
				{/*	<input type="submit"/>*/}
				{/*</form>*/}
			</div>
		</>
	);
};