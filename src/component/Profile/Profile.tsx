import React, {FC} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

type ProfilePropsType = {
    string: any
}

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div>

            <img src="https://rozabox.com/wp-content/uploads/2019/01/man-5846064_1920-735x400.jpg"
                 alt=""/>
            <div>
                <img className={s.avatar}
                     src="https://i.pinimg.com/736x/c8/12/7e/c8127e8add8d8d8ea067d7c7e3da177f.jpg"
                     alt="avatar"/>
            </div>
            <MyPosts title={'My post'}/>
        </div>
    )
}

