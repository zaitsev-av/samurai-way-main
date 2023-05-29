
import React from "react";

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/reduxStore";



export const rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>,
		document.getElementById('root')
	)
}

store.subscribe( rerenderEntireTree )
rerenderEntireTree()

