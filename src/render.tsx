import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {addPost, DataPropsType} from "./redux/state";
import React from "react";

export const rerenderEntireTree = (data:DataPropsType) => {
	ReactDOM.render(
		<BrowserRouter>
			<App data={data}
				 addPost={addPost}/>
	</BrowserRouter>,
	document.getElementById('root')
)
}

// export const rerenderEntireTree = (data: DataPropsType) => {
// 	ReactDOM.render(
// 		<BrowserRouter>
// 			<App data = {data} addPost = {addPost} />
// 	< /BrowserRouter>,	document.getElementById('root'))
// }
// rerenderEntireTree(data)
