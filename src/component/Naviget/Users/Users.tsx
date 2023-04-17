import React from 'react';
import s from "./Users.module.css";
import abcd from "../../../image/avatar/abcd.png";
import { UserType } from "../../../redux/usersReducer";
import { NavLink } from "react-router-dom";
import { ButtonFollow } from "../../common/Buttons/ButtonFollow";

export type UsersPropsType = {
	users: UserType[]
	pages: number[]
	currentPage: number
	onPageChanged: ( pageNumber: number ) => void
	followUser: ( userID: number ) => void
	unfollowUser: ( userID: number ) => void
	toggleFollowingProgress: ( progress: boolean, userID: number ) => void
	followingInProgress: number[]
};
export const Users: React.FC<UsersPropsType> = ( props ) => {
	const {
		users,
		onPageChanged,
		pages,
		currentPage,
		followUser,
		unfollowUser,
		toggleFollowingProgress,
		followingInProgress
	} = props
	console.log( users )
	return (
		<div>
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
										<ButtonFollow user={ u }
										              followUser={ followUser }
										              unfollowUser={ unfollowUser }
										              toggleFollowing={ toggleFollowingProgress }
										              followingInProgress={ followingInProgress }
										/>
									</div>
								</div>
							
							</>
						)
					} )
					}
				</div>
			</div>
	);
};