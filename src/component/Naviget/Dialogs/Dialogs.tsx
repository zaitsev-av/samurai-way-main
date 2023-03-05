import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {MessagesItem} from "./MessageItem/MessagesItem";
import {DialogsPageType} from "../../../redux/state";
import {DialogsItem} from "./DialogItem/DialogsItem";

export type UserDialogType = {
	id: string
	userName: string
}

type DialogsProps = {
	state: DialogsPageType
	addNewMassage:(message: string) => void
	updateNewMessageText: (newMessageText: string)=> void
};


export const Dialogs: FC<DialogsProps> = (props) => {
	// let dialogsElement =  props.users.map((u) => <MessagesItem user={u}/>)
	// let messagesElement = props.messages.map((m) => <span key={m.id}>{m.message}</span>)
	const newMessages = React.createRef<HTMLTextAreaElement>()

	const addNewMessages = () => {
		if (newMessages.current?.value) props.addNewMassage(newMessages.current?.value)

	}
	const onChangeMessage = () => {
		if (newMessages.current?.value) props.updateNewMessageText(newMessages.current?.value)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<DialogsItem users={props.state.dialogs}/>
			</div>
			<div className={s.messages}>
				<div className={s.message}>
					<MessagesItem messages={props.state.messages}/>
				</div>
				<textarea ref={newMessages}
				value={props.state.newMessageText}
						  onChange={onChangeMessage}
				/>
				<button onClick={addNewMessages}>add new message</button>
			</div>
		</div>
	);
};