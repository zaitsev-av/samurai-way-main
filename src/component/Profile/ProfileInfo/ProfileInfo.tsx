import React from 'react';
import s from './ProfileInfo.module.css'
import abcd from '../../../image/avatar/abcd.png'
import { ProfilePageType } from "../../../redux/profileReducer";
import { ProfileStatus } from "./ProfileStatus";

export type ProfileInfoPropsType = {
	info: ProfilePageType
	updateStatus: (status: string)=> void
	status: string
};
export const ProfileInfo: React.FC<ProfileInfoPropsType> = ( props ) => {
	const { info, status,updateStatus } = props
	return (
		<div className={s.wrapperInfo}>
			{!info.profile.photos.small ? (
				<img className={s.avatar} src={abcd} alt="avatar" />
			) : (
				<img className={s.avatar} src={info.profile.photos.small} alt="avatar" />
			)}
			
			<div className={s.info}>
				<div className={s.fullName}>{info.profile.fullName}</div>
				<ProfileStatus status={status} updateStatus={updateStatus} />
				{!info.profile.lookingForAJob && <div>This user is looking for a job</div>}
			</div>
		</div>
	);
};
