import s from "../Users.module.css";
import { NavLink } from "react-router-dom";
import abcd from "../../../../image/avatar/abcd.png";
import { ButtonFollow } from "../../../../component/common/Buttons/ButtonFollow";
import React, { memo } from "react";
import { UserType } from "../../../../redux/usersReducer";

type UserPropsType = {
	user: UserType
	onClick: () => void
	followingInProgress: number[]
	follow: (userID: number)=> void
	unfollow: ( userID: number ) => void
}

export const User: React.FC<UserPropsType> = memo( ( props ) => {
	const { user, follow, followingInProgress, unfollow, onClick } = props
	
	console.log('users render')
	
	return <div>
		<div>
			<div className={ s.card }>
				<div className={ s.img }>
					<NavLink to={ `/profile/${ user.id }` }>
						<img src={ user.photos.small !== null ? user.photos.small : abcd }
						     alt={ "avatar" }
						     onClick={ onClick }/>
					</NavLink>
				</div>
				<div className={ s.info }>
					<span>{ user.name }</span>
					<p className={ s.text }>{ user.status }</p>
				</div>
				<ButtonFollow user={ user }
				              followingInProgress={ followingInProgress }
				              follow={ follow }
				              unfollow={ unfollow }/>
			</div>
		</div>
	
	</div>;
});