import React from 'react';
import s from './ProfileInfo.module.css'
// import avatarFirst from "../../../image/avatar/avatarFirst.png";
import { ResponseProfileType } from "../../../redux/profileReducer";

export type ProfileInfoPropsType = {
	info: ResponseProfileType
};
export const ProfileInfo: React.FC<ProfileInfoPropsType> = ( props ) => {
	const { info } = props
	return (
		<div className={s.wrapperInfo}>
			<img className={s.avatar}
			     src={info.photos.small}
			     alt="avatar"/>
			<div className={s.info}>
				<div>My name: {info.fullName}</div>
				<div>{info.aboutMe}</div>
			</div>
		</div>
	);
};