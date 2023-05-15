import React, { FC } from 'react';
import s from './App.module.css';
import { Route } from 'react-router-dom';
import { News } from "./component/Naviget/News/News";
import { Music } from "./component/Naviget/Music/Music";
import { Settings } from "./component/Naviget/Settings/Settings";
import { NavigateContainer } from "./component/Naviget/NavigateContainer";
import { Login } from "./component/common/FormLogin/Login";
import UsersContainer from "./component/Naviget/Users/UsersContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import DialogsContainer from "./component/Naviget/Dialogs/DialogsContainer";


type AppProps = {
    store: any
}


export const App: FC<AppProps> = ({store}) => {
    
    const state = store.getState()
    
    return (
        <div className={s.appWrapper}>
            <HeaderContainer/>
            <div className={ s.container }>
                <NavigateContainer/>
                <div className={ s.appWrapperContent }>
                    <Route path={ '/login' }
                           render={ () => <Login/> }/>
                    <Route path={ '/users' }
                           render={ () => <UsersContainer/> }/>
                    <Route path={ '/messages' }
                           render={ () => <DialogsContainer/> }/>
                    <Route path={ '/profile/:userID?' }
                           render={ () => <ProfileContainer/> }/>
                    <Route path={ '/news' }
                           component={ News }/>
                    <Route path={ '/music' }
                           component={ Music }/>
                    <Route path={ '/settings' }
                           component={ Settings }/>
                </div>
            </div>
            
        </div>

    )
}


