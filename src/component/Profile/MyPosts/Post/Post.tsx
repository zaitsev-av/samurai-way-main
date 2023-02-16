import React, {FC} from 'react';
import s from "./Post.module.css";
import {PostProps} from "../MyPosts";
import avatarFirst from '../../../../image/avatar/avatarFirst.png'

type PostType = {
    post: PostProps
}

export const Post: FC <PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src={avatarFirst}
                 alt="avatar"
            />
            <div key={props.post.id}>{props.post.text}</div>
            <div>
                <input type="button" value={'like'} alt={'like'} />
            </div>
        </div>
    );
};