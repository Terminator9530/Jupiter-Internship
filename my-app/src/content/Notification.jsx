import React from "react";
import Button from "./Button";
import Label from "./Label";
import Toggler from "./Toggle";
import DatePicker from "./DatePicker";

function Notification(){
    return(
        <div style={{'margin':'50px auto','width':'40%','height':'auto'}}>
            <center><Label text="Notifications" style={{'margin':'0'}} /></center>
            <form style={{'padding':'10px','height':'auto','display':'block','margin':'50px 0','border':'1px solid black'}}>
                <Label class="col-xl-6 col-md-8 col-12" text="Send all alerts" />
                <Toggler class="col-xl-6 col-md-4 col-12" /><br />
                <Label class="col-xl-6 col-md-8 col-12" text="Alerts only task success" />
                <Toggler class="col-xl-6 col-md-4 col-12" /><br />
                <Label class="col-xl-6 col-md-8 col-12" text="Alerts only for failed tasks" />
                <Toggler class="col-xl-6 col-md-4 col-12" /><br />
                <Label class="col-xl-6 col-md-8 col-12" text="I do not want any alerts" />
                <Toggler class="col-xl-6 col-md-4 col-12" /><br />
                <Button text="Cancel" color="secondary" style={{'margin':'30px 20px 0px 0px'}} /> 
                <Button text="Submit" style={{'backgroundColor':'#47c20a','color':'white','margin':'30px 0px 0px 20px'}} />
            </form>
        </div>
    );
}

export default Notification;