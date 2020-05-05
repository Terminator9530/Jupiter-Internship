import React from "react";
import Button from "./Button";
import Label from "./Label";
import TextField from "./TextField";
import DatePicker from "./DatePicker";

function Profile(){
    return(
        <div style={{'margin':'100px auto','width':'40%','height':'477px'}}>
            <center><Label text="Profile Info" /></center>
            <form style={{'padding':'10px','height':'377px','display':'block','margin':'50px 0','border':'1px solid black'}}>
                <Label text="Name" />
                <TextField /><br />
                <Label text="DOB" />
                <DatePicker /><br />
                <Label text="Profession" />
                <TextField /><br />
                <Label text="Designation" />
                <TextField /><br />
                <Button text="Submit" />
                <Button text="Cancel" color="secondary" />
            </form>
        </div>
    );
}

export default Profile;