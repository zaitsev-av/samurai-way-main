import React from "react";
import {store, DataPropsType, StoreType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";


export const rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App store={store}
				 addPost={store.addPost}
				 updateNewPostText={store.updateNewPostText}
				 addNewMassage={store.addNewMassage}
				 updateNewMessageText={store.updateNewMessageText}
			/>
		</BrowserRouter>,
		document.getElementById('root')
	)
}
rerenderEntireTree()