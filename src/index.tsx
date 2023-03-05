import {subscriber} from "./redux/state";
import React from "react";
// import {rerenderEntireTree} from "./render";


import {addNewMassage, addPost, data, DataPropsType, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
// import React from "react";


export const rerenderEntireTree = (data: DataPropsType) => {
	ReactDOM.render(
		<BrowserRouter>
			<App data={data}
				 addPost={addPost}
				 updateNewPostText={updateNewPostText}
				 addNewMassage={addNewMassage}
				 updateNewMessageText={updateNewMessageText}
			/>
		</BrowserRouter>,
		document.getElementById('root')
	)
}

rerenderEntireTree(data)
subscriber(() => rerenderEntireTree (data))


