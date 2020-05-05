import React from 'react';
import PersonIcon from '@material-ui/icons/Person';

function AppBar(){
    return (
        <nav class="navbar navbar-light bg-light" style={{"height":"60px"}}>
            <span class="flex-container">
                <span>
                    <PersonIcon />
                </span>
                <span>User</span>
            </span>
        </nav>
    );
}

export default AppBar;