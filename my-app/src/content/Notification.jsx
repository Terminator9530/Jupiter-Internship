import React from "react";
import Button from "./Button";
import Label from "./Label";
import Toggler from "./Toggle";
import Zoom from '@material-ui/core/Zoom';

function Notification(){
    function submit(e){
        e.preventDefault();
        console.log("clicked");
        var all=document.getElementById("send_all_alerts").value;
        var success=document.getElementById("alerts_only_task_success").value;
        var failure=document.getElementById("alerts_only_for_failed_tasks").value;
        var no=document.getElementById("I_do_not_want_any_alerts").value;
        console.log(all,success,failure,no);
    }
    return(
        <Zoom in={true}>
             <div style={{'margin':'50px auto','width':'60%','height':'auto'}}>
            <center><Label text="Notifications" style={{'margin':'0'}} />
            <form onSubmit={submit} style={{'padding':'10px','height':'auto','display':'block','margin':'50px 0','border':'1px solid black'}} className="polaroid">
                <Label class="col-xl-6 col-md-12 col-12" text="Send all alerts" />
                <Toggler id="send_all_alerts" class="col-xl-6 col-md-12 col-12" /><br />
                <Label class="col-xl-6 col-md-12 col-12" text="Alerts only task success" />
                <Toggler id="alerts_only_task_success" class="col-xl-6 col-md-12 col-12" /><br />
                <Label class="col-xl-6 col-md-12 col-12" text="Alerts only for failed tasks" />
                <Toggler id="alerts_only_for_failed_tasks" class="col-xl-6 col-md-12 col-12" /><br />
                <Label class="col-xl-6 col-md-12 col-12" text="I do not want any alerts" />
                <Toggler id="I_do_not_want_any_alerts" class="col-xl-6 col-md-12 col-12" /><br />
                <Button text="Cancel" color="secondary" style={{'margin':'30px 20px 0px 0px'}} /> 
                <Button id="noti_submit" text="Submit" style={{'backgroundColor':'#47c20a','color':'white','margin':'30px 0px 0px 20px'}} />
            </form>
            </center>
        </div>
        </Zoom>
       
    );
}

export default Notification;