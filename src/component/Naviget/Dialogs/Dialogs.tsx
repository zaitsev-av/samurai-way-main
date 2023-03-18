import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {MessagesItem} from "./MessageItem/MessagesItem";
import {DialogsItem} from "./DialogItem/DialogsItem";
import { addNewMessageAC, DialogsType, updateNewMessageAC } from "../../../redux/DialogsReducer";
import { ActionType } from "../../../redux/ProfileReducer";

export type UserDialogType = {
	id: string
	userName: string
}

type DialogsProps = {
	state: DialogsType
	dispatch: (action: ActionType) => void
};


export const Dialogs: FC<DialogsProps> = (props) => {
	const newMessages = React.createRef<HTMLTextAreaElement>()

	const addNewMessages = () => {
	addNewMessageAC()
	}
	const onChangeMessage = () => {
					// updateNewMessageAC(newMessages.current.value)
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