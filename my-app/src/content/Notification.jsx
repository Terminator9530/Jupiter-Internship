import React from "react";
import Button from "./Button";
import Label from "./Label";
import Toggler from "./Toggle";
import DatePicker from "./DatePicker";

function Notification(){
    return(
        <div style={{'margin':'100px auto','width':'40%','height':'477px'}}>
            <center><Label text="Notifications" style={{'margin':'0'}} /></center>
            <form style={{'padding':'10px','height':'377px','display':'block','margin':'50px 0','border':'1px solid black'}}>
                <Label style={{'width':'44%'}} text="Send all alerts" />
                <Toggler /><br />
                <Label style={{'width':'44%'}} text="Alerts only task success" />
                <Toggler /><br />
                <Label style={{'width':'44%'}} text="Alerts only for failed tasks" />
                <Toggler /><br />
                <Label style={{'width':'44%'}} text="I do not want any alerts" />
                <Toggler /><br />
                <Button text="Submit" style={{'backgroundColor':'#47c20a','color':'white','margin':'30px 0px 0px 20px','float':'right'}} />
                <Button text="Cancel" color="secondary" style={{'margin':'30px 20px 0px 0px','float':'right'}} /> 
            </form>
        </div>
    );
}

export default Notification;