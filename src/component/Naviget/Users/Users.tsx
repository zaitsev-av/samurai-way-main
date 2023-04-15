import React from 'react';
import s from "./Users.module.css";
import abcd from "../../../image/avatar/abcd.png";
import { UserType } from "../../../redux/usersReducer";
import { NavLink } from "react-router-dom";
import axios from "axios";

export type UsersPropsType = {
	users: UserType[]
	pages: number[]
	currentPage: number
	onPageChanged: ( pageNumber: number ) => void
	followUser: ( userID: string ) => void
	unfollowUser: ( userID: string ) => void

};
export const Users: React.FC<UsersPropsType> = ( props ) => {
	const { users, onPageChanged, pages, currentPage, followUser, unfollowUser } = props
	
	
	return (
			<div >
				<div>
					{ pages.map( ( el, index ) => <span key={ index }
					                                    
					                                    onClick={ () => onPageChanged( el ) }
					                                    className={ currentPage === el
						                                    ? s.pageActive
						                                    : s.pageNotActive }>
				{ index < 10 ? el : '' }
			</span> ) }
				</div >
				<div className={ s.usersLists }>
					{ users.map( u => {
						// const onFollowUser = () => {
						// 	 u.follow ?
						// 		 axios.delete( `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
						// 				 withCredentials: true,
						// 				 headers: {
						// 					 'API-KEY':'2982f94d-1667-4567-ac00-6b85d50bebfa' }
						// 			 } )
						// 			 .then( response => {
						// 				 if ( response.data.resultCode === 0 ) {
						// 					 unfollowUser( u.id )
						// 				 }
						// 			 })
						//
						//
						// 	:
						// 		 axios.post( `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
						// 				 withCredentials: true,
						// 				 headers: {
						// 					 'API-KEY':'2982f94d-1667-4567-ac00-6b85d50bebfa' }
						//
						// 			 } )
						// 			 .then( response => {
						// 				 if ( response.data.resultCode === 0 ) {
						// 					 followUser( u.id )
						// 				 }
						// 			 })
						// 	}
						
						
						return (
							<>
								<div key={ u.id }>
									<div className={ s.card }>
										<div className={ s.img }>
											<NavLink to={ `/profile/${ u.id }` }>
												<img src={ u.photos.small !== null ? u.photos.small : abcd }
												     alt={ 'avatar' }/>
											</NavLink>
										</div>
										<div className={ s.info }>
											<span>{ u.name }</span>
											<p className={ s.text }>{ u.status }</p>
										</div>
										{ u.follow
											? <button onClick={ () => {
												axios.delete(
														`https://social-network.samuraijs.com/api/1.0/follow/${ u.id }`,
														{
															withCredentials: true,
															headers: {
																'API-KEY': '2982f94d-1667-4567-ac00-6b85d50bebfa'
															}
														} )
													.then( response => {
														response.data.resultCode === 0 && unfollowUser( u.id )
													} )
											} }>{ u.follow ? 'Unfollow' : 'Follow' }</button>
											: <button onClick={ () => {
												console.log( u )
												axios.post(
														`https://social-network.samuraijs.com/api/1.0/follow/${ u.id }`,
														{}, {
															withCredentials: true,
															headers: {
																'API-KEY': '2982f94d-1667-4567-ac00-6b85d50bebfa'
															}
														} )
													.then( response => {
														response.data.resultCode === 0 && followUser( u.id )
														console.log( u.name )
														console.log( u.follow )
													} )
											} }>{ u.follow ? 'Follow' : 'Unfollow' }</button>
										}
										{/*<button >{ u.follow ? 'Follow' : 'Unfollow' }</button>*/ }
									</div>
								</div>
							
							</>
						)
					} ) }
				</div>
			</div>
	);
};