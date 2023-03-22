import React, {FC} from 'react';
import {UserDialogType} from "../Dialogs";
import {NavLink} from "react-router-dom";
import avatarFirst from "../../../../image/avatar/avatarFirst.png";
import s from './DialogItem.module.css'

type DialogsItemProps = {
	users: UserDialogType[]
};
export const DialogsItem: FC<DialogsItemProps> = (props) => {
	return (
		<div>
			{props.users.map(u => {
				return (
					<div key={u.id} className={s.dialogItem}>
						<img src={avatarFirst} alt={'avatar from dialog'}/>
						<NavLink to={`/messages/${u.id}/`}>{u.userName}</NavLink>
					</div>

				)
			})}
			{/*<NavLink to={`/messages/${props.users.map(u => u.id)}/`}>{props.users.map(u => u.userName)}</NavLink>*/}
		</div>
	);
};