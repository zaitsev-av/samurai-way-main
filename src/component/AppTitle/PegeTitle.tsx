import React from "react";
type PadeTitlePropsType = {
    title: string
}
function PageTitle(props: PadeTitlePropsType) {
    console.log('AppTitle rendering')
    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default PageTitle