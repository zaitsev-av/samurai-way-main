import { store }  from "./redux/reduxStore";
import { rerenderEntireTree } from "./render";


store.subscribe( rerenderEntireTree )
rerenderEntireTree()

