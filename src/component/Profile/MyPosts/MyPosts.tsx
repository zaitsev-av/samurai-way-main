import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {v1} from "uuid";
import {ActionsTypes, addPostAC, PostType, upDateNewPostAC} from "../../../redux/state";

type MyPostsProps = {
    posts: PostType[]
    title: string
    // addPost:(postMessage: string)=> void
    newPostText: string
    // updateNewPostText: (newPostText: string) => void
    dispatch: (action: ActionsTypes) => void
}



export const MyPosts: FC<MyPostsProps> = (props) => {

    const newPostElement= React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        props.dispatch(addPostAC())
    }
    const onPostChange = () => {
        if (newPostElement.current?.value) props.dispatch(
            upDateNewPostAC(newPostElement.current.value))
    }


    return (

        <div>
            <h2>{props.title}</h2>

            <div>
                {props.posts.map((p) => {
                    return <Post post={p}
                                 key={p.id}/>
                })}

            </div>
            <div className={s.textarea}>
                <textarea ref={newPostElement}
                value={props.newPostText}
                onChange={onPostChange}
                />
                <button onClick={addPostHandler}>Send</button>
            </div>
        </div>
    );
};