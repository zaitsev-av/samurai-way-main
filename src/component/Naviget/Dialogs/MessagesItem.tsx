import React, {FC} from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {UserDialogType} from "./Dialogs";


type MessagesItemProps = {
	user: UserDialogType
};
export const MessagesItem: FC<MessagesItemProps> = (props) => {
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={`/messages/${props.user.id}/`}>{props.user.userName}</NavLink>
		</div>
	);
};

//