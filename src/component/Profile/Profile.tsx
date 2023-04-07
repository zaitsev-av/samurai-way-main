import React, {FC} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfilePageType } from "../../redux/profileReducer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profile: ProfilePageType
	upDateNewPost: ( newPostText: string) => void
    addPost: ()  => void
}

export const Profile: FC<ProfilePropsType> = (props) => {
    const {profile, upDateNewPost, addPost} = props
    return (
        <div className={s.wrapper}>
            {/*<img src="https://rozabox.com/wp-content/uploads/2019/01/man-5846064_1920-735x400.jpg"*/}
            {/*     alt=""*/}
            {/*     className={s.img}/>*/}
            <ProfileInfo info={profile.profile}/>
            <MyPosts title={'My post'} post={profile.post}
                newPostText={profile.newPostText}
                upDateNewPostAC={(newPostText: string)=> upDateNewPost(newPostText)}
                     addPostAC={addPost}
                     value={profile.newPostText}
            />
        </div>
    )
}

