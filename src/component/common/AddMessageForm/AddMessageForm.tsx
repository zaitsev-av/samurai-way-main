import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import s from "./AddMessageForm.module.css";


type Inputs = {
	message: string,
};

export const AddMessageForm = ({onSubmitHandler, textArea}: AddMessageFormMyPostsType) => {
	const {register, handleSubmit, reset, setError, formState: {errors}} = useForm<Inputs>();
	console.log(errors)
	
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		onSubmitHandler(data.message)
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={s.wrapper}>
				{textArea
					? <textarea cols={30} rows={10} placeholder={'Enter your message'} {...register("message", {
						required: "Required field",
						minLength: {
							value: 2,
							message: "Minimum 2 symbols",
						},
					})} />
					: <input placeholder={'Enter your message'} {...register("message", {
						required: "Required field",
						minLength: {
							value: 2,
							message: "Minimum 2 symbols",
						},
					})} />
				}
				{errors.message && <div>{errors.message?.message}</div>}
				<input type="submit" className={s.addMessageForm_btn}/>
			</div>
			
		</form>
	);
};


type AddMessageFormMyPostsType = {
	onSubmitHandler: (message: string) => void
	textArea: boolean
}
