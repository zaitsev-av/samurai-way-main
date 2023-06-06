import React, { memo, useCallback } from 'react';
import s from './MyPosts.module.css'
import { Post } from "./Post/Post";
import { PostType } from "../../../redux/profileReducer";
import { AddMessageForm } from "../../common/AddMessageForm/AddMessageForm";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";


type MyPostsProps = {
    title: string
    addPost: ( text: string ) => void
    userID: number
}

export const MyPosts: React.FC<MyPostsProps> = memo( ( props ) => {
    const { addPost, userID, title } = props
    const post = useSelector<AppStateType, PostType[]>( state => state.profileReducer.posts)
    
    const onSubmitHandler = useCallback( () => ( message: string ) => {
        addPost( message )
    }, [ addPost ] )
    
    let mePosts = post
    if ( userID !== 28474 ) {
        mePosts = []
    }
    return (
        <div>
            <h2 className={ s.headerPost }>{ title }</h2>
            <div>
                {mePosts.map((p) => {
                    return <Post post={ p }
                                 key={ p.id }/>
                } ) }
            </div>
            <div className={ s.container }>
                <AddMessageForm onSubmitHandler={ onSubmitHandler }
                                textArea={ true }/>
            </div>
        </div>
    );
} );