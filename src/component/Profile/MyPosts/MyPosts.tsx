import React from 'react';
import s from './MyPosts.module.css'
import { Post } from "./Post/Post";
import { PostType } from "../../../redux/profileReducer";
import { AddMessageForm } from "../../common/AddMessageForm/AddMessageForm";


type MyPostsProps = {
    post: PostType[]
    title: string
    addPost: (text: string) => void
    userID: number
}

export const MyPosts: React.FC<MyPostsProps> = (props) => {
    const {addPost, userID, post, title} = props

    const onSubmitHandler = (message: string) => {
        addPost(message)
    }
    let mePosts = post
    if ( userID !== 28474 ) {
        mePosts = []
    }
    
    return (

        <div>
            <h2 className={s.headerPost}>{title}</h2>

            <div>
                {mePosts.map((p) => {
                    return <Post post={p}
                                 key={p.id}/>
                })}

            </div>
            <div className={s.container}>
                <AddMessageForm onSubmitHandler={onSubmitHandler} textArea={true }/>
            </div>
        </div>
    );
};