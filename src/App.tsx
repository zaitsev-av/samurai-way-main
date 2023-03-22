import React, { FC } from 'react';
import './App.css';
import { Header } from "./component/Header/Header";
import { Navigate } from "./component/Naviget/Navigate";
import { Route } from 'react-router-dom';
import { News } from "./component/Naviget/News/News";
import { Music } from "./component/Naviget/Music/Music";
import { Settings } from "./component/Naviget/Settings/Settings";
import logo_transparent from '../src/image/logo_transparent.png'
import { v1 } from "uuid";
import { ProfileContainer } from './component/Profile/ProfileContainer';
import { DialogsContainer } from "./component/Naviget/Dialogs/DialogsContainer";
import { NavigateContainer } from "./component/Naviget/NavigateContainer";


type AppProps = {
    store: any
}


export const App: FC<AppProps> = ({store}) => {
    
    const state = store.getState()
    
    return (
    
        <div className='app-wrapper'>
            <Header image={ logo_transparent }
                    title={ 'Socialympics' }
            />
            <NavigateContainer/>
            <div className={ 'app-wrapper-content' }>
                <Route path={ '/messages' }
                       render={ () => <DialogsContainer/> }/>
                <Route path={ '/profile' }
                       render={ () => <ProfileContainer/> }/>
                <Route path={ '/news' }
                       component={ News }/>
                <Route path={ '/music' }
                       component={ Music }/>
                <Route path={ '/settings' }
                       component={ Settings }/>
            </div>
    
        </div>

    )
}


