import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsedMenu: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody collapse={props.collapsedMenu}/>
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    collapse: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    if (props.collapse) {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    } else {
        return (
            <ul>click</ul>
        )
    }
}

export default Accordion