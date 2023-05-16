import React from 'react';
import s from './MyPosts.module.css'
import { Post } from "./Post/Post";
import { PostType } from "../../../redux/profileReducer";
import { AddMessageForm } from "../../common/AddMessageForm/AddMessageForm";


type MyPostsProps = {
    post: PostType[]
    title: string
    addPost: (text: string) => void
}

export const MyPosts: React.FC<MyPostsProps> = (props) => {
    const {addPost} = props

    const onSubmitHandler = (message: string) => {
        addPost(message)
    }
    
    return (

        <div>
            <h2>{props.title}</h2>

            <div>
                {props.post.map((p) => {
                    return <Post post={p}
                                 key={p.id}/>
                })}

            </div>
            <div className={s.container}>
                <AddMessageForm onSubmitHandler={onSubmitHandler} textArea={true}/>
            </div>
        </div>
    );
};