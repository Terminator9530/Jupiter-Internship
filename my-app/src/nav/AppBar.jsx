import React from 'react';
import PersonIcon from '@material-ui/icons/Person';

function AppBar(props){
    return (
        <nav className="navbar navbar-light bg-light" style={{"height":"60px"}}>
            <span className="flex-container">
                <span>
                    <PersonIcon />
                </span>
                <span>{props.name}</span>
            </span>
        </nav>
    );
}

export default AppBar;