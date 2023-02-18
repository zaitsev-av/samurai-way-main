import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {v1} from "uuid";
import {PostType} from "../../../redux/state";

type MyPostsProps = {
    posts: PostType[]
    title: string
}



export const MyPosts: FC<MyPostsProps> = (props) => {

    return (

        <div>
            <h2>{props.title}</h2>
            <div className={s.textarea}>
                <textarea name="new post"
                          id=""
                ></textarea>
                <button>Send</button>
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