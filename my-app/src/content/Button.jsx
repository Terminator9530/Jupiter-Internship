import React from "react";
import Button from '@material-ui/core/Button';

function Buttons(props){
    return (
        <Button variant="contained" color={props.color?props.color:''} style={props.color?{'marginRight':'20px'}:{'backgroundColor':'#47c20a','color':'white','marginRight':'20px'}}>
            {props.text}
        </Button>
    );
}

export default Buttons;