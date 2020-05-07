import React from "react";
import Button from "./Button";
import Label from "./Label";
import DatePicker from "./DatePicker";
import Zoom from '@material-ui/core/Zoom';
import TextField from './TextField';

function Profile(){
    function submit(e){
        e.preventDefault();
        console.log("clicked");
        var name=document.getElementById("Name").value;
        var DOB=document.getElementById("DOB").value;
        var prof=document.getElementById("Profession").value;
        var desg=document.getElementById("Designation").value;
        console.log(name,DOB,prof,desg);
    }
    return(
        <Zoom in={true}>
        <div style={{'margin':'50px auto','width':'60%','height':'auto'}}>
            <center><Label text="Profile Info" style={{'margin':'0'}} />
            <form onSubmit={submit} style={{'padding':'10px','height':'auto','display':'block','margin':'50px 0','border':'1px solid black'}} className="row polaroid">
                <Label class="col-xl-2 col-md-12 col-12" text="Name" />
                <TextField id="Name" class="col-xl-8 col-md-12 col-12" /><br />
                <Label class="col-xl-2 col-md-12 col-12" text="DOB" />
                <DatePicker id="DOB" class="col-xl-8 col-md-12 col-12" /><br />
                <Label class="col-xl-2 col-md-12 col-12" text="Profession" />
                <TextField id="Profession" class="col-xl-8 col-md-12 col-12" /><br />
                <Label class="col-xl-2 col-md-12 col-12" text="Designation" />
                <TextField id="Designation" class="col-xl-8 col-md-12 col-12" /><br />
                <Button text="Cancel" color="secondary" style={{'margin':'30px 20px 0px 0px'}} /> 
                <Button id="set_submit" text="Submit" style={{'backgroundColor':'#47c20a','color':'white','margin':'30px 0px 0px 20px'}} />
            </form></center>
        </div>
        </Zoom>
    );
}

export default Profile;