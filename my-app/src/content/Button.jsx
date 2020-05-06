import React from "react";
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import Profile from "../content/Profile";
import Notification from "../content/Notification";
import Task1 from "../content/Task1";
import Task2 from "../content/Task2";

function Buttons(props){
    function changePage(){
        if(props.value==="setting"){
            ReactDOM.render(
                <Profile />,
                document.getElementById('content')
            );
        }
        else if(props.value==="notification"){
            ReactDOM.render(
                <Notification />,
                document.getElementById('content')
            );
        }
        else if(props.value==="task1"){
            ReactDOM.render(
                <Task1 />,
                document.getElementById('content')
            );
        }
        else if(props.value==="task2"){
            ReactDOM.render(
                <Task2 />,
                document.getElementById('content')
            );
        }
    }
    return (
        <Button value={props.value} onClick={changePage} className={props.class?props.class:""} variant="contained" color={props.color?props.color:''} style={props.style}>
            {props.text}
        </Button>
    );
}

export default Buttons;