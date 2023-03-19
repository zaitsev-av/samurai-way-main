import React, { ChangeEvent, FC } from 'react';
import s from './Dialogs.module.css'
import { MessagesItem } from "./MessageItem/MessagesItem";
import { DialogsItem } from "./DialogItem/DialogsItem";
import { DialogsType } from "../../../redux/dialogsReducer";

export type UserDialogType = {
	id: string
	userName: string
}

type DialogsProps = {
	dialog: DialogsType
	updateNewMessageAC: ( newMessageText: string ) => void
	addNewMessageAC: () => void
};


export const Dialogs: FC<DialogsProps> = (props) => {
	const { dialog, updateNewMessageAC, addNewMessageAC } = props
	const newMessages = React.createRef<HTMLTextAreaElement>()

	const addNewMessages = () => {
	addNewMessageAC()
	}
	const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
		updateNewMessageAC(e.currentTarget.value )
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<DialogsItem users={dialog.dialogs}/>
			</div>
			<div className={s.messages}>
				<div className={s.message}>
					<MessagesItem messages={dialog.messages}/>
				</div >
				<div className={s.addMessageForm}>
					<textarea ref={newMessages}
							  value={dialog.newMessageText}
							  onChange={onChangeMessage}
							  className={s.addMessageForm_txt}
					/>
					<button onClick={addNewMessages} className={s.addMessageForm_btn}>send</button>
				</div>
			</div>
		</div>
	);
};