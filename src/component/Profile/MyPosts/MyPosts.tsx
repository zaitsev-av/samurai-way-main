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

        if (newPostElement.current?.value) {
            props.addPost(newPostElement.current.value)

        }
    }
    return (

        <div>
            <h2>{props.title}</h2>

            <div>
                {props.posts.map((p) => {
                    return <Post post={p}
                                 key={p.id}/>
                })}
                {/*<Post post = {posts}/>*/}
                {/*<Post post = {posts}/>*/}
            </div>
            <div className={s.textarea}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPostHandler}>Send</button>
            </div>
        </div>
    );
};