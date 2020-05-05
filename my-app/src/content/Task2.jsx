import React from "react";
import Button from "./Button";
import Label from "./Label";
import DropDown from "./DropDown";

function Task2(){
    return(
        <div style={{'margin':'100px auto','width':'60%','height':'477px'}}>
            <center><Label text="Task_2" style={{'margin':'0'}} /></center>
            <form style={{'padding':'10px','height':'377px','display':'block','margin':'50px 0','border':'1px solid black'}}>
                <Label text="Source Name" />
                <DropDown /><br />
                <Label text="Enable Logging" />
                <div class="pretty p-svg p-plain">
                    <input type="checkbox" />
                    <div class="state">
                        <img class="svg" src="../../task.svg" />
                        <label></label>
                    </div>
                </div><br />
                <Label text="Provide SQL" />
                <textarea rows="3" cols="30" /><br />
                <Label text="Target Result" />
                <DropDown /><br />
                <Button text="Validate" color="primary" style={{'margin':'30px 20px 0px 20px','float':'right'}} />
                <Button text="Submit" style={{'backgroundColor':'#47c20a','color':'white','margin':'30px 20px 0px 20px','float':'right'}} />
                <Button text="Cancel" color="secondary" style={{'margin':'30px 20px 0px 0px','float':'right'}} />
            </form>
        </div>
    );
}

export default Task2;