import React from 'react';
import Buttons from '../content/Button';

function Drawer(){
    return (
        <div className="col-5" id="drawer">
            <div className="profile" style={{'textAlign':'center'}}>
                <Buttons text="Profile" color="secondary" class="menu" />
                <div style={{'height':'0px','overflow':'hidden'}}>
                    <Buttons text="Setting" color="primary" class="menu submenu" />
                    <Buttons text="Notifications" color="primary" class="menu submenu" />
                </div>
            </div>
            <div className="tasks"  style={{'textAlign':'center'}}>
                <Buttons text="My Tasks" color="secondary" class="menu" />
                <div style={{'height':'0px','overflow':'hidden'}}>
                    <Buttons text="Task1" color="primary" class="menu submenu" />
                    <Buttons text="Task2" color="primary" class="menu submenu" />
                </div>
            </div>
        </div>
    );
}

export default Drawer;