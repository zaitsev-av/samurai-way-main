import React from "react";
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";


export const rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App store={store}
				dispatch={store.dispatch}
			/>
		</BrowserRouter>,
		document.getElementById('root')
	)
}
rerenderEntireTree()