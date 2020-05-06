import React from 'react';
import Buttons from '../content/Button';

function Drawer(){
    return (
        <div className="col-12" id="drawer">
            <div className="profile" style={{'textAlign':'center'}}>
                <Buttons text="Profile" color="secondary" class="menu" />
                <div style={{'height':'0px','overflow':'hidden'}}>
                    <Buttons text="Settings" color="primary" class="menu submenu" value="setting" />
                    <Buttons text="Notification" color="primary" class="menu submenu" value="notification" />
                </div>
            </div>
            <div className="tasks"  style={{'textAlign':'center'}}>
                <Buttons text="My Tasks" color="secondary" class="menu" />
                <div style={{'height':'0px','overflow':'hidden'}}>
                    <Buttons text="Task1" color="primary" class="menu submenu" value="task1" />
                    <Buttons text="Task2" color="primary" class="menu submenu" value="task2" />
                </div>
            </div>
        </div>
    );
}

export default Drawer;