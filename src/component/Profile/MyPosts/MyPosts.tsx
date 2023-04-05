import React, { FC, ChangeEvent } from 'react';
import s from './MyPosts.module.css'
import { Post } from "./Post/Post";
import { PostType } from "../../../redux/profileReducer";


type MyPostsProps = {
    post: PostType[]
    title: string
    newPostText: string
    upDateNewPostAC: ( newPostText: string ) => void
    addPostAC: () => void
    value: string
}

export const MyPosts: FC<MyPostsProps> = (props) => {
    const {upDateNewPostAC, addPostAC, value} = props
    const newPostElement= React.createRef<HTMLTextAreaElement>()
    
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        upDateNewPostAC(e.currentTarget.value)
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
                <textarea ref={newPostElement}
                value={value}
                onChange={onPostChange}
                className={s.textarea}/>
                <button className={s.button} onClick={addPostAC}>Send</button>
            </div>
        </div>
    );
};