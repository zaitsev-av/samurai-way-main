import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {MessagesItem} from "./MessagesItem";
import {v1} from "uuid";

export type UserDialogType = {
	id: string
	userName: string
}

const dialogsData: UserDialogType[] = [
	{id: v1(), userName: "Alexandr"},
	{id: v1(), userName: "Viktoria"},
	{id: v1(), userName: "Sister"},
	{id: v1(), userName: "Mom"},
	{id: v1(), userName: "Dad"},
]

const messagesData  = [
	{id: v1(), message: "hi"},
	{id: v1(), message: "How are you?"},
	{id: v1(), message: "Good, thanks. And you?"},
	{id: v1(), message: "How do you spell"},
	{id: v1(), message: "What is learn? I'm learn React"},
]

type DialogsProps = {
	users: UserDialogType[]
};
export const Dialogs: FC<DialogsProps> = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{dialogsData.map((user) => {
					return (
						<MessagesItem user={user}/>
					)
				} )}
			</div>
			<div className={s.messages}>
				<div className={s.message}>{messagesData.map((m) => {
					return (
						<span key={m.id}>{m.message}</span>
					)
				})}</div>

			</div>
		</div>
	);
};