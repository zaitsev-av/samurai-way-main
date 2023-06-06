import React, { FC, memo } from "react";
import s from './Profile.module.css'
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfilePageType } from "../../redux/profileReducer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profileInfo: ProfilePageType
    addPost: ( text: string ) => void
    updateStatus: ( status: string ) => void
    status: string
    userID: number
}

export const Profile: FC<ProfilePropsType> = memo( (props) => {
    const { profileInfo, addPost, status, updateStatus, userID } = props
    return (
        <div className={ s.wrapper }>
            <ProfileInfo info={ profileInfo }
                         status={ status }
                         updateStatus={ updateStatus }
            />
            <MyPosts title={ 'My post' }
                     addPost={ addPost }
                     userID={userID}
            />
        </div>
    )
})

