import React from 'react';
import s from "./Users.module.css";
import abcd from "../../../image/avatar/abcd.png";
import { UserType } from "../../../redux/usersReducer";
import { NavLink } from "react-router-dom";
import { ButtonFollow } from "../../common/Buttons/ButtonFollow";
import { Paginator } from "../../common/Paginator/Paginator";
import { Preloader } from "../../common/Loader/Preloader";

export type UsersPropsType = {
	users: UserType[]
	pages: number[]
	currentPage: number
	onPageChanged: ( pageNumber: number ) => void
	followingInProgress: number[]
	follow: (userID: number)=> void
	unfollow: ( userID: number ) => void
	setUserID: ( userID: number ) => void
	isFetching: boolean
};
export const Users: React.FC<UsersPropsType> = ( props ) => {
	const {
		users, onPageChanged, pages,
		currentPage, followingInProgress, follow,
		unfollow, setUserID, isFetching
	} = props

	return (
		<div className={s.wrapper}> {isFetching  ? <div className={s.usersPreloader}><Preloader/> </div>: ( <>
			<div>
				<Paginator pages={ pages }
				           currentPage={ currentPage }
				           onPageChange={ onPageChanged }/>
				{/*	{ pages.map( ( el, index ) =>*/ }
				{/*		*/ }
				{/*		<span key={ index }*/ }
				{/*	                                    onClick={ () => onPageChanged( el ) }*/ }
				{/*	                                    className={ currentPage === el*/ }
				{/*		                                    ? s.pageActive*/ }
				{/*		                                    : s.pageNotActive }>*/ }
				{/*	{ index < 10 ? el : '' }*/ }
				{/*</span> )*/ }
				{/*	}*/ }
			</div>
			<div className={ isFetching ?`${s.fetching}` : s.usersLists }>
				{ users.map( u => {
					return (
						<div key={ u.id }>
							<div>
								<div className={ s.card }>
									<div className={ s.img }>
										<NavLink to={ `/profile/${ u.id }` }>
											<img src={ u.photos.small !== null ? u.photos.small : abcd }
											     alt={ 'avatar' }
											     onClick={ () => setUserID( u.id ) }/>
										</NavLink>
									</div>
									<div className={ s.info }>
										<span>{ u.name }</span>
										<p className={ s.text }>{ u.status }</p>
									</div>
									<ButtonFollow user={ u }
									              followingInProgress={ followingInProgress }
									              follow={ follow }
									              unfollow={ unfollow }/>
								</div>
							</div>
						
						</div>
					);
				} ) }
			</div>
		</>)}
			
			</div>
	);
};