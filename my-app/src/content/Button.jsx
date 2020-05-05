import React from "react";
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import Profile from "../content/Profile";
import Notification from "../content/Notification";

function Buttons(props){
    function changePage(){
        if(props.value=="setting"){
            ReactDOM.render(
                <Profile />,
                document.getElementById('content')
            );
        }
        else if(props.value=="notification"){
            ReactDOM.render(
                <Notification />,
                document.getElementById('content')
            );
        }
    }
    return (
        <Button value={props.value} onClick={changePage} className={props.class?props.class:""} variant="contained" color={props.color?props.color:''} style={props.color?{}:{'backgroundColor':'#47c20a','color':'white'}}>
            {props.text}
        </Button>
    );
}

export default Buttons;