import React from "react";

function Label(props){
    return (
        <span className="label">
            <span>{props.text}</span>
        </span>
    );
}

export default Label;