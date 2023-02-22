import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import './redux/state'
import {data} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";


ReactDOM.render(
	<BrowserRouter>
		<App data={data} addPost={addPost}/>
	</BrowserRouter>,
	document.getElementById('root')
)


