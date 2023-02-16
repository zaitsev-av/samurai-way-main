import React, {FC} from 'react';
import s from "./Post.module.css";
import {PostProps} from "../MyPosts";


type PostType = {
    post: PostProps[]
}

export const Post: FC <PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/736x/c8/12/7e/c8127e8add8d8d8ea067d7c7e3da177f.jpg"
                 alt="avatar"/>
            <div>{props.post.map((p) => {
                return (
                    <p key={p.id}>{p.text}</p>
                )
            })}</div>
            <div>
                <input type="button" value={'like'} alt={'like'} />
            </div>
        </div>
    );
};