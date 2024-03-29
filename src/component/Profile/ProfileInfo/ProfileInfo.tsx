import React, { memo } from 'react';
import s from './ProfileInfo.module.css'
import abcd from '../../../image/avatar/abcd.png'
import { ProfilePageType } from "../../../redux/profileReducer";
import { ProfileStatus } from "./ProfileStatus";

export type ProfileInfoPropsType = {
	info: ProfilePageType
	updateStatus: (status: string)=> void
	status: string
};
export const ProfileInfo: React.FC<ProfileInfoPropsType> = memo( ( props ) => {
	const { info, status,updateStatus } = props
	return (
		<div className={s.wrapperInfo}>
			<div className={s.info}>
				<div className={s.fullName}>{info.profile.fullName}</div>
				<ProfileStatus status={status} upDateStatus={updateStatus} />
				{!info.profile.lookingForAJob && <div className={s.infoItem}>This user is looking for a job</div>}
				{!info.profile.instagram && <div className={s.infoItem}>This user has not specified their Instagram 🙈</div>}
			</div>
			{!info.profile.photos.small ? (
				<img className={s.avatar} src={abcd} alt="avatar" />
			) : (
				<img className={s.avatar} src={info.profile.photos.small} alt="avatar" />
			)}
		</div>
	);
});
