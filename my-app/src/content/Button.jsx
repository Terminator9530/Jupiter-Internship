import React from "react";
import Button from '@material-ui/core/Button';

function Buttons(props){
    return (
        <Button className={props.class?props.class:""} variant="contained" color={props.color?props.color:''} style={props.color?{}:{'backgroundColor':'#47c20a','color':'white'}}>
            {props.text}
        </Button>
    );
}

export default Buttons;