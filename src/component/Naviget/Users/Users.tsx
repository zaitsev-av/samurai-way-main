import React from 'react';
import { UserType} from "../../../redux/usersReducer";
import abcd from '../../../image/avatar/abcd.png'
import s from './Users.module.css'
import axios from "axios";

export type UsersPropsType = {
	users: UserType[]
	followUser: ( userID: string ) => void
	setUser: (users: UserType[]) => void
};
export const Users: React.FC<UsersPropsType> = ( props ) => {
	const { users, followUser, setUser } = props

	axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => setUser(response.data.items))
	
	return (
		<div className={s.usersLists}>
			{/*{usersObj.users.length === 0 ? setUser(user) : ''}*/}
			{users.map(u => {
				const onFollowUser = () => {
					followUser(u.id)
				}
				return (
					<>
						<div key={u.id}>
							<div className={ s.card } >
								<div className={ s.img }><img src={u.photos.small !== null ? u.photos.small : abcd} alt={'avatar'}/></div>
								<div className={ s.info }>
									<span>{u.name}</span>
									<p className={s.text}>{u.status}</p>
								</div>
								<button onClick={onFollowUser}>{u.follow ? 'Follow'  : 'Unfollow'}</button>
							</div>
						</div>
						
				</>
				
				
				)
			})}
			
			
		</div>
	);
};