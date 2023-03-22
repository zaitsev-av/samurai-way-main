import React, {FC} from 'react';
import s from "../MessageItem/MessageItem.module.css";

export type MessagesPropsType = {
	id: string
	message: string
}

type MessagesItemProps = {
	messages: MessagesPropsType[]
};
export const MessagesItem: FC<MessagesItemProps> = (props) => {
	return (
		<div className={s.dialog + ' ' + s.active}>

			{props.messages.map(m => {
				return (
					<div key={m.id} className={s.message}>{m.message}</div>
				)
			})}
		</div>
	);
};

//Z