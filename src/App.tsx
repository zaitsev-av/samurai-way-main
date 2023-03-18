import React, {FC} from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Navigate} from "./component/Naviget/Navigate";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from "./component/Naviget/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {News} from "./component/Naviget/News/News";
import {Music} from "./component/Naviget/Music/Music";
import {Settings} from "./component/Naviget/Settings/Settings";
import logoTwo from '../src/image/avatar/logoTwo.png'
import { StoreType} from "./redux/store";
import { v1 } from "uuid";
import { ProfileContainer } from './component/Profile/ProfileContainer';


type AppProps = {
    store: any
}


export const App: FC<AppProps> = ({store}) => {
    
    const state = store.getState()
    
    return (

        <div className='app-wrapper'>
            <Header image={logoTwo}
                    title={'Social network'}/>
            <Navigate titlePage={["Profile", 'Messages', 'News', 'Music', 'Settings']}
                      friends={[
                          {id: v1(), userName: "Alexandr"},
                          {id: v1(), userName: "Viktoria"},
                          {id: v1(), userName: "Sister"},
                          {id: v1(), userName: "Mom"},
                          {id: v1(), userName: "Dad"},
                      ]}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/messages'}
                       render={() => <Dialogs state={state.dialogsReducer}
                                              dispatch={store.dispatch.bind(store)}

                       />}/>
                <Route path={'/profile'}
                       render={() => <ProfileContainer/>}/>
                {/*<Route path={'/news'}*/}
                {/*       component={News}/>*/}
                {/*<Route path={'/music'}*/}
                {/*       component={Music}/>*/}
                {/*<Route path={'/settings'}*/}
                {/*       component={Settings}/>*/}
            </div>

        </div>

    )
}


