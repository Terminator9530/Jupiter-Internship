import React from "react";

function Label(props){
    return (
        <span className="label" style={props.style}>
            <span>{props.text}</span>
        </span>
    );
}

export default Label;