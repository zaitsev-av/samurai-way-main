import React from 'react';
import { UserType, UsersPageType } from "../../../redux/usersReducer";
import { v1 } from "uuid";
import abcd from '../../../image/avatar/abcd.png'
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
		avatar: abcd,
		location: {
			city: 'Mozyr',
			country: 'Belarus'
		}
	},
		{
			id: v1(), fullName: 'Viktoria', status: 'Great wife',
			followed: true,
			avatar: abcd,
			location: {
				city: 'Mozyr',
				country: 'Belarus'
			}
		},
		{
			id: v1(), fullName: 'Ksenia', status: 'Daughter Alexander',
			followed: true,
			avatar: abcd,
			location: {
				city: 'Mozyr',
				country: 'Belarus'
			}
		},
		{
			id: v1(), fullName: 'Viktor', status: 'Web developer',
			followed: false,
			avatar: abcd,
			location: {
				city: 'Moscow',
				country: 'Russia'
			}
		}]
	
	return (
		<div className={s.usersLists}>
			{usersObj.users.length === 0 ? setUser(user) : ''}
			{usersObj.users.map(u => {
				const onFollowUser = () => {
					followUser(u.id)
				}
				return (
					<>
						{/*<div key={u.id}>{u.fullName}*/}
						{/*	<span className={s.avatar}><img src={avatarFromUserPage} alt={'avatar'}/></span>*/}
						{/*	<span>{u.followed ? ' friend' : ' not friend'}</span>*/}
						{/*	<button onClick={onFollowUser}>{u.followed ? 'follow'  : 'unfollow'}</button></div>*/}
						<div key={u.id}>
							<div className={ s.card } >
								<div className={ s.img }><img src={abcd} alt={'avatar'}/></div>
								<div className={ s.info }>
									<span>{u.fullName}</span>
									<p className={s.text}>{u.status}. From {u.location.city} {u.location.country}</p>
									{/*<p>{u.location.city}</p>*/}
								</div>
								<button onClick={onFollowUser}>{u.followed ? 'Follow'  : 'Unfollow'}</button>
								{/*<a href="#">Button</a>*/}
							</div>
						</div>
						
				</>
				
				
				)
			})}
			
			
		</div>
	);
};