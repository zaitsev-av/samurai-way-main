import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {v1} from "uuid";
import {PostType} from "../../../redux/state";

type MyPostsProps = {
    posts: PostType[]
    title: string
    addPost:(postMessage: string)=> void
}



export const MyPosts: FC<MyPostsProps> = (props) => {

    const newPostElement= React.createRef<HTMLTextAreaElement>()
    const addPostHandler = () => {
        let  newPost = newPostElement.current?.value
        if (typeof newPost === "string") {
            props.addPost(newPost)
        }
    }
    return (

        <div>
            <h2>{props.title}</h2>
            <div className={s.textarea}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPostHandler}>Send</button>
            </div>
            <div >
                {props.posts.map((p) => {
                    return <Post post={p} key={p.id}/>
                })}
                {/*<Post post = {posts}/>*/}
                {/*<Post post = {posts}/>*/}
            </div>
        </div>
    );
};