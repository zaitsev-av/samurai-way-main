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
import {DataPropsType} from "../src/redux/state";

type AppProps = {
    data: DataPropsType
    addPost: (postMessage: string) => void
}


export const App: FC<AppProps> = (props) => {
    return (

        <div className='app-wrapper'>
            <Header image={logoTwo}
                    title={'Social network'}/>
            <Naviget titlePage={props.data.menu.menuPages}
                     friends={props.data.dialogsPage}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/messages'}
                       render={() => <Dialogs state={props.data.dialogsPage}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile state={props.data.profilePage}
                                              addPost={props.addPost}/>}/>
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


