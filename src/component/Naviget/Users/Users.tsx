import React from 'react';
import { UserType, UsersPageType } from "../../../redux/usersReducer";
import { v1 } from "uuid";
import avatarFromUserPage from '../../../image/avatar/avatarFromUserPage.png'
import s from './Users.module.css'

export type UsersPropsType = {
	usersObj: UsersPageType
	followUser: ( userID: string ) => void
	setUser: (users: UserType[]) => void
};
export const Users: React.FC<UsersPropsType> = ( props ) => {
	const { usersObj, followUser, setUser } = props
	
	const user = [{
		id: v1(), fullName: 'Alexander', status: 'Good job',
		followed: true,
		avatar: avatarFromUserPage,
		location: {
			city: 'Mozyr',
			country: 'Belarus'
		}
	},
		{
			id: v1(), fullName: 'Viktoria', status: 'Great wife',
			followed: true,
			avatar: avatarFromUserPage,
			location: {
				city: 'Mozyr',
				country: 'Belarus'
			}
		},
		{
			id: v1(), fullName: 'Ksenia', status: 'Daughter Alexander',
			followed: true,
			avatar: avatarFromUserPage,
			location: {
				city: 'Mozyr',
				country: 'Belarus'
			}
		},
		{
			id: v1(), fullName: 'Viktor', status: 'Web developer',
			followed: false,
			avatar: avatarFromUserPage,
			location: {
				city: 'Moscow',
				country: 'Russia'
			}
		}]
	
	return (
		<div>
			{usersObj.users.length === 0 ? setUser(user) : ''}
			{usersObj.users.map(u => {
				const onFollowUser = () => {
					followUser(u.id)
				}
				return (
					<div key={u.id}>{u.fullName}
						<span className={s.avatar}><img src={avatarFromUserPage} alt={'avatar'}/></span>
						<span>{u.followed ? ' friend' : ' not friend'}</span>
						<button onClick={onFollowUser}>{u.followed ? 'follow'  : 'unfollow'}</button></div>
				)
			})}
		</div>
	);
};