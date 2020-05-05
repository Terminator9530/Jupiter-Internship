import React from "react";
import Button from "./Button";
import Label from "./Label";
import Toggler from "./Toggle";
import DatePicker from "./DatePicker";

function Notification(){
    return(
        <div style={{'margin':'100px auto','width':'40%','height':'477px'}}>
            <center><Label text="Notifications" /></center>
            <form style={{'padding':'10px','height':'377px','display':'block','margin':'50px 0','border':'1px solid black'}}>
                <Label text="Name" />
                <Toggler /><br />
                <Label text="DOB" />
                <Toggler /><br />
                <Label text="Profession" />
                <Toggler /><br />
                <Label text="Designation" />
                <Toggler /><br />
                <Button text="Submit" />
                <Button text="Cancel" color="secondary" />
            </form>
        </div>
    );
}

export default Notification;