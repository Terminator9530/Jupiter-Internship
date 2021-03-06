import React from "react";

function Label(props){
    const a="label "+props.class;
    return (
        <span style={props.style} className={a}>
            <span>{props.text}</span>
        </span>
    );
}

export default Label;