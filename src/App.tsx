import React, {FC} from 'react';

import './App.css';
import {Header} from "./component/Header/Header";
import {Naviget} from "./component/Naviget/Naviget";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from "./component/Naviget/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {News} from "./component/Naviget/News/News";
import {Music} from "./component/Naviget/Music/Music";
import {Settings} from "./component/Naviget/Settings/Settings";
import logoTwo from '../src/image/avatar/logoTwo.png'
import { StoreType, DataPropsType} from "./redux/state";

type AppProps = {
    store: StoreType
    addPost: (postMessage: string) => void
    updateNewPostText: (newPostText: string) => void
    addNewMassage:(message: string) => void
    updateNewMessageText: (newMessageText: string)=> void
}


export const App: FC<AppProps> = (props) => {
    const data = props.store.getState()
    return (

        <div className='app-wrapper'>
            <Header image={logoTwo}
                    title={'Social network'}/>
            <Naviget titlePage={data.menu.menuPages}
                     friends={data.dialogsPage}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/messages'}
                       render={() => <Dialogs state={data.dialogsPage}
                                              addNewMassage={props.addNewMassage.bind(props.store)}
                                              updateNewMessageText={props.updateNewMessageText.bind(props.store)}
                       />}/>
                <Route path={'/profile'}
                       render={() => <Profile profilePage={data.profilePage}
                                              addPost={props.addPost.bind(props.store)}
                                              updateNewPostText={props.updateNewPostText.bind(props.store)}
                       />}/>
                <Route path={'/news'}
                       component={News}/>
                <Route path={'/music'}
                       component={Music}/>
                <Route path={'/settings'}
                       component={Settings}/>
            </div>

        </div>

    )
}


