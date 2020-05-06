import React from "react";
import Button from "./Button";
import Label from "./Label";
import TextField from "./TextField";
import DatePicker from "./DatePicker";

function Profile(){
    return(
        <div style={{'margin':'50px auto','width':'60%','height':'auto'}}>
            <center><Label text="Profile Info" style={{'margin':'0'}} />
            <form style={{'padding':'10px','height':'auto','display':'block','margin':'50px 0','border':'1px solid black'}} className="row">
                <Label class="col-xl-3 col-md-6 col-12" text="Name" />
                <TextField name="Name" class="col-xl-9 col-md-6 col-12" /><br />
                <Label class="col-xl-3 col-md-6 col-12" text="DOB" />
                <DatePicker class="col-xl-9 col-md-6 col-12" /><br />
                <Label class="col-xl-3 col-md-6 col-12" text="Profession" />
                <TextField name="Profession" class="col-xl-9 col-md-6 col-12" /><br />
                <Label class="col-xl-3 col-md-6 col-12" text="Designation" />
                <TextField name="Designation" class="col-xl-9 col-md-6 col-12" /><br />
                <Button text="Cancel" color="secondary" style={{'margin':'30px 20px 0px 0px'}} /> 
                <Button text="Submit" style={{'backgroundColor':'#47c20a','color':'white','margin':'30px 0px 0px 20px'}} />
            </form></center>
        </div>
    );
}

export default Profile;