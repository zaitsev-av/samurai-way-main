import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {v1} from "uuid";

export type MyPostsProps = {
    title: string
};

export type PostProps = {
    id: string
    text: string
};

const posts: PostProps[]= [
    {id: v1(), text: "Lorem ipsum diam massa — proin maecenas ligula gravida non pharetra, elementum tellus malesuada tellus integer. "},
    {id: v1(), text: "Magna curabitur nec pellentesque tellus quam at sagittis commodo eu commodo metus fusce sed quisque rutrum vitae tellus bibendum justo tellus."},
    {id: v1(), text: "Nam ultricies bibendum porta, orci eu leo quisque enim eros molestie gravida et elementum duis."},
]

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
                <Post post = {posts}/>
                <Post post = {posts}/>
            </div>
        </div>
    );
};