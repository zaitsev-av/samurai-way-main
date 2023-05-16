import React, {FC} from "react";
import s from './Profile.module.css'
import { MyPosts } from "./MyPosts/MyPosts";
import { PostType, ProfilePageType } from "../../redux/profileReducer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profileInfo: ProfilePageType
    addPost: ( text: string ) => void
    updateStatus: ( status: string ) => void
    status: string
    posts: PostType[]
}

export const Profile: FC<ProfilePropsType> = (props) => {
    const { profileInfo, addPost, status, updateStatus, posts } = props
    
    return (
        <div className={ s.wrapper }>
            <ProfileInfo info={ profileInfo }
                         status={ status }
                         updateStatus={ updateStatus }
            />
            <MyPosts title={ 'My post' }
                     post={ posts }
                     addPost={ addPost }
            />
        </div>
    )
}

