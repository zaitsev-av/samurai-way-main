import React, {FC} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import avatarFirst from '../../image/avatar/avatarFirst.png'
import { ProfilePageType } from "../../redux/ProfileReducer";

type ProfilePropsType = {
    profile: ProfilePageType
	upDateNewPostAC: (newPostText: string) => void
    addPostAC: ()  => void
}

export const Profile: FC<ProfilePropsType> = (props) => {
    const {profile, upDateNewPostAC, addPostAC} = props
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
            <MyPosts title={'My post'} post={profile.post}
                newPostText={profile.newPostText}
                upDateNewPostAC={(newPostText: string)=> upDateNewPostAC(newPostText)}
                     addPostAC={addPostAC}
                     value={profile.newPostText}
            />
        </div>
    )
}

