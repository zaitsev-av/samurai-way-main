import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {MessagesItem} from "./MessageItem/MessagesItem";
import {ActionsTypes, addNewMessageAC, DialogsPageType, upDateNewMessageAC} from "../../../redux/state";
import {DialogsItem} from "./DialogItem/DialogsItem";

export type UserDialogType = {
	id: string
	userName: string
}

type DialogsProps = {
	state: DialogsPageType
	dispatch: (action: ActionsTypes) => void
};


export const Dialogs: FC<DialogsProps> = (props) => {
	const newMessages = React.createRef<HTMLTextAreaElement>()

	const addNewMessages = () => {
		props.dispatch(addNewMessageAC())

	}
	const onChangeMessage = () => {
		if (newMessages.current?.value) props.dispatch(
			upDateNewMessageAC(newMessages.current?.value)) // add message
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<DialogsItem users={props.state.dialogs}/>
			</div>
			<div className={s.messages}>
				<div className={s.message}>
					<MessagesItem messages={props.state.messages}/>
				</div >
				<div className={s.addMessageForm}>
					<textarea ref={newMessages}
							  value={props.state.newMessageText}
							  onChange={onChangeMessage}
							  className={s.addMessageForm_txt}
					/>
					<button onClick={addNewMessages} className={s.addMessageForm_btn}>send</button>
				</div>
			</div>
		</div>
	);
};