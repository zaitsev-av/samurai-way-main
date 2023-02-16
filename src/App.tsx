import React from 'react';

import './App.css';
import {Header} from "./component/Header/Header";
import {Naviget} from "./component/Naviget/Naviget";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from "./component/Naviget/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./component/Naviget/News/News";
import {Music} from "./component/Naviget/Music/Music";
import {Settings} from "./component/Naviget/Settings/Settings";
import {v1} from "uuid";
import logoTwo from '../src/image/avatar/logoTwo.png'


const menuPages = [
    'Profile',
    'Messages',
    'News',
    'Music',
    'Settings'
]

export const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header image={logoTwo} title={'Social network'}/>
                <Naviget titlePage={menuPages}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/messages'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    )
}


