import React from 'react';
import s from './ProfileInfo.module.css'
import abcd from '../../../image/avatar/abcd.png'
import {  ProfileType } from "../../../redux/profileReducer";

export type ProfileInfoPropsType = {
	info: ProfileType
};
export const ProfileInfo: React.FC<ProfileInfoPropsType> = ( props ) => {
	const { info } = props
	return (
		<div className={s.wrapperInfo}>
			{info.photos.small === null
				?
				<img className={s.avatar}
				     src={abcd}
				     alt="avatar"/>
				:
				<img className={s.avatar}
				     src={info.photos.small}
				     alt="avatar"/>
			}
			
			<div className={s.info}>
				<div>My name: {info.fullName}</div>
				<div>{!info.lookingForAJob && 'This user is looking for a job'}</div>
			</div>
		</div>
	);
};