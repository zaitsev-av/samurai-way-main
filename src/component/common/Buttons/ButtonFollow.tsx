import React from 'react';
import { usersAPI } from "../../../api/API";
import { UserType } from "../../../redux/usersReducer";

export type ButtonsPropsType = {
	user: UserType
	followUser: ( userID: number ) => void
	unfollowUser: ( userID: number ) => void
	toggleFollowing: ( progress: boolean, userId: number ) => void
	followingInProgress: number[]
};
export const ButtonFollow: React.FC<ButtonsPropsType> = ( props ) => {
	const { user, followUser, unfollowUser, toggleFollowing, followingInProgress } = props
	return (
		<div>
			{ user.followed
				?
				<button disabled={followingInProgress.some(id => id === user.id)} onClick={ ()=> {
					toggleFollowing(true, user.id)
					usersAPI.follow(user.id).then( data => {
						data === 0 && unfollowUser( user.id  )
						toggleFollowing(false, user.id)
					})
				}}>Unfollow</button>
				:
				<button disabled={followingInProgress.some(id => id === user.id)} onClick={ ()=> {
					toggleFollowing(true, user.id)
					usersAPI.unfollow(user.id).then( data => {
						data === 0 && followUser( user.id  )
						toggleFollowing(false, user.id)
					})
				}}>Follow</button>
			}
		</div>
	);
};