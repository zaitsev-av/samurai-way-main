import React, {FC} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfilePageType } from "../../redux/profileReducer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profileInfo: ProfilePageType
	upDateNewPost: ( newPostText: string) => void
    addPost: ()  => void
}

export const Profile: FC<ProfilePropsType> = (props) => {
    const {profileInfo, upDateNewPost, addPost} = props
    return (
        <div className={s.wrapper}>
            <ProfileInfo info={profileInfo.profile}
            />
            <MyPosts title={'My post'} post={[]}
                newPostText={profileInfo.status}
                upDateNewPostAC={(newPostText: string)=> upDateNewPost(newPostText)}
                     addPostAC={addPost}
                     value={profileInfo.status}
            />
        </div>
    )
}

