import React from 'react';
import people from "../../../image/avatar/people.svg";
import s from './Friend.module.css'
import { MenuPagesType } from "../../../redux/menuReducer";


type FriendType = {
	menuPages: MenuPagesType
};
export const Friends = (props: FriendType) => {

	return (
		<>
		<div className={s.nameBlock}>Friends</div>
		<div className={s.friends}>
			{props.menuPages.friends.map(f => {
				return (
					<div key={f.id} className={s.friend}>
							<img src={people}
								  alt=""/>
						<span>{f.userName}</span>
					</div>
				)
			})}
		</div>
		</>
	);
};