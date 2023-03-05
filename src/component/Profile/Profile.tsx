import React, {FC} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import avatarFirst from '../../image/avatar/avatarFirst.png'
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost:(postMessage: string)=> void
    updateNewPostText: (newPostText: string)=> void
}

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div>

            <img src="https://rozabox.com/wp-content/uploads/2019/01/man-5846064_1920-735x400.jpg"
                 alt=""
                 className={s.img}/>
            <div>
                <img className={s.avatar}
                     src={avatarFirst}
                     alt="avatar"/>
            </div>
            <MyPosts title={'My post'} posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

