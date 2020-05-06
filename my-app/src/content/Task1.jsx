import React from "react";
import Button from "./Button";
import Label from "./Label";
import DropDown from "./DropDown";
import Zoom from '@material-ui/core/Zoom';

function Task1(){
    return(
        <Zoom in={true}>
            <div style={{'margin':'50px auto','width':'60%','height':'auto'}}>
            <center><Label text="Task_1" style={{'margin':'0'}} /></center>
            <form style={{'padding':'10px','height':'auto','display':'block','margin':'50px 0','border':'1px solid black'}}>
                <Label class="col-xl-3 col-12" text="Source Name" />
                <DropDown class="col-xl-7 col-12" /><br />
                <Label class="col-xl-3 col-12" text="Enable Logging" />
                <div class="pretty p-svg p-plain col-xl-7 col-12" style={{'margin-top': '20px'}}>
                    <input type="checkbox" />
                    <div class="state">
                        <img class="svg" src="../../task.svg" />
                        <label></label>
                    </div>
                </div><br />
                <Label class="col-xl-3 col-12" text="Provide SQL" />
                <textarea style={{'margin-top': '20px'}} class="col-xl-7 col-12" rows="3" cols="30" /><br />
                <Label class="col-xl-3 col-12" text="Target Result" />
                <DropDown class="col-xl-7 col-12" /><br />
                <Button text="Cancel" color="secondary" style={{'margin':'30px 20px 0px 0px'}} />
                <Button text="Submit" style={{'backgroundColor':'#47c20a','color':'white','margin':'30px 20px 0px 20px'}} />
                <Button text="Validate" color="primary" style={{'margin':'30px 20px 0px 20px'}} />
            </form>
        </div>
        </Zoom>
    );
}

export default Task1;