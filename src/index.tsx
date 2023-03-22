
import React from "react";
import { store } from "./redux/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import { Provider } from "react-redux";



export const rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App store={store}/>
			</Provider>
		</BrowserRouter>,
		document.getElementById('root')
	)
}

store.subscribe( rerenderEntireTree )
rerenderEntireTree()

