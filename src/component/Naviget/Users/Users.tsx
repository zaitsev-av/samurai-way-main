import React, { memo } from 'react';
import s from "./Users.module.css";
import { UserType } from "../../../redux/usersReducer";
import { Paginator } from "../../common/Paginator/Paginator";
import { Preloader } from "../../common/Loader/Preloader";
import { User } from "./User/User";

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
export const Users: React.FC<UsersPropsType> = memo( ( props ) => {
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
				
			</div>
			<div className={ isFetching ?`${s.fetching}` : s.usersLists }>
				{ users.map( u => {
					return (
						<User key={ u.id }
						      user={ u }
						      onClick={ () => setUserID( u.id ) }
						      followingInProgress={ followingInProgress }
						      follow={ follow }
						      unfollow={ unfollow }/>
					);
				} ) }
			</div>
		</>)}
			
			</div>
	);
});