import React, {FC} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfilePageType } from "../../redux/profileReducer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profileInfo: ProfilePageType
	upDateNewPost: ( newPostText: string) => void
    addPost: ()  => void
    updateStatus: (status: string)=> void
    status: string
}

export const Profile: FC<ProfilePropsType> = (props) => {
    const {profileInfo, upDateNewPost, addPost, status, updateStatus} = props
        console.log(`Profile ${status}`)
    return (
        <div className={s.wrapper}>
            <ProfileInfo info={profileInfo}
                         status={status}
                         updateStatus={updateStatus}
            />
            <MyPosts title={'My post'} post={[]}
                /*newPostText={profileInfo.profile.}*/
                upDateNewPostAC={(newPostText: string)=> upDateNewPost(newPostText)}
                     addPostAC={addPost}
                     /*value={profileInfo.status}*/
            />
        </div>
    )
}

