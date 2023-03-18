import React, {FC} from 'react';
import s from "./Post.module.css";
import avatarFirst from '../../../../image/avatar/avatarFirst.png'
import {PostType} from "../../../../redux/store";

type PropsType = {
    post: PostType
}

export const Post: FC <PropsType> = (props) => {
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