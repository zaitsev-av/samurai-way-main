import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import './redux/state'
import {data} from "./redux/state";



ReactDOM.render(
	<App data = {data}/>,
	document.getElementById('root')
)


