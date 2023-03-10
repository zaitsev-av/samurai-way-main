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
import {StoreType, ActionsTypes} from "./redux/state";

type AppProps = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
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
                                              dispatch={props.dispatch.bind(props.store)}

                       />}/>
                <Route path={'/profile'}
                       render={() => <Profile profilePage={data.profilePage}
                                              dispatch={props.store.dispatch.bind(props.store)}
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


