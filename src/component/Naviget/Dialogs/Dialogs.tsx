import React, { FC } from 'react';
import s from './Dialogs.module.css'
import { MessagesItem } from "./MessageItem/MessagesItem";
import { DialogsItem } from "./DialogItem/DialogsItem";
import { DialogsType } from "../../../redux/dialogsReducer";
import { AddMessageForm } from "../../common/AddMessageForm/AddMessageForm";

export type UserDialogType = {
	id: string
	userName: string
}

type DialogsProps = {
	dialog: DialogsType
	updateNewMessageAC: ( newMessageText: string ) => void
	addNewMessage: (message: string) => void
	isAuth: boolean
};


export const Dialogs: FC<DialogsProps> = (props) => {
	const { dialog, addNewMessage} = props

	const onSubmitHandler = (message: string) => {
		addNewMessage(message)
	}

	return (
		<div className={ s.dialogs }>
			<div className={ s.dialogsItem }>
				<DialogsItem users={ dialog.dialogs }/>
			</div>
			<div className={ s.messages }>
				<div className={ s.message }>
					<MessagesItem messages={ dialog.messages }/>
				</div>
				<div className={ s.addMessageForm }>
					<AddMessageForm onSubmitHandler={onSubmitHandler} textArea={true}/>
				</div>
			</div>
		</div>
	)
};