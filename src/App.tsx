import React from 'react';
import './App.css';
import Accordion from "./component/Accordion/Accordion";
import Rating from "./component/Rating/Rating";
import PageTitle from "./component/AppTitle/PegeTitle";

function App(props: any) {
    console.log('App rendering')
    return (
        <div>
            <PageTitle title ={'This is APP component'}/>
            <PageTitle title ={'User'}/>
            Article 1
            <Rating value ={3}/>
            <Accordion titleValue={'Menu'} collapsedMenu = {false}/>{/*// Передаём title в AccordionTitle, пока туплю здесь но вроде разобрался.
            //По факут текст 'Article One' передаётся в AccordionTitle но сейчас но как бы лежит в Accordion,
            //для того чтобы предать его в AccordionTitle нам нужно в компаненте Accordion написать props, далее
            передать полученый ею props
            //в AccordionTitle. И уже в AccordionTitle в части где передается jsx разметка необходимо написать
            пропс.title*/}
            <Accordion titleValue={'Users'} collapsedMenu = {false}/> {/*Делаем так чтобы меню сворачивалось.
            Схема передачи пропсов следующая. в Основной компонент Accordion передается пропс  collapsedMenu с значением true или false
            далее типизируем получаемые значения в AccordionPropsType. Далее в самой компаненте Accordion в теге JSX AccordionBody передаем
            это значение  самому компоненту AccordionBody. Далее типизируем этот компонент и прописываем разметку JSX через if else.*/}
            Article 2
            <Rating value ={0}/>
            <Rating value ={props.rating}/>
            <Rating value ={1}/>
            <Rating value ={2}/>
            <Rating value ={3}/>
            <Rating value ={4}/>
            <Rating value ={5}/>
        </div>
    )
}


export default App;
