import React from 'react';
import { UserType } from "../../../redux/usersReducer";

export type ButtonsPropsType = {
	user: UserType
	followingInProgress: number[]
	follow: (userID: number)=> void
	unfollow: (userID: number)=> void
};
export const ButtonFollow: React.FC<ButtonsPropsType> = ( props ) => {
	const { user, followingInProgress ,
		follow, unfollow
	} = props
	return (
		<div>
			{ user.followed
				?
				<button disabled={followingInProgress.some(id => id === user.id)}
				        onClick={ ()=> {unfollow(user.id)}}>Unfollow</button>
				:
				<button disabled={followingInProgress.some(id => id === user.id)}
				        onClick={ ()=> {follow(user.id)}}>Follow</button>
			}
		</div>
	);
};