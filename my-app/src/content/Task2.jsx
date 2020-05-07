import React from "react";
import Button from "./Button";
import Label from "./Label";
import DropDown from "./DropDown";
import Zoom from '@material-ui/core/Zoom';

function Task2(){
    const [val,setVal]=React.useState("off");
    function changeHandler(event){
        if(event.target.value==="off"){
            setVal("on");
        } else {
            setVal("off");
        }
    }
    function submit(e){
        e.preventDefault();
        console.log("clicked");
        var source=document.getElementById("source").textContent;
        var logging=document.getElementById("logging").value;
        var sql=document.getElementById("sql").value;
        var target=document.getElementById("target").textContent;
        console.log(source,logging,sql,target);
    }
    return(
        <Zoom in={true}>
            <div style={{'margin':'50px auto','width':'60%','height':'auto'}}>
            <center><Label text="Tasks_2" style={{'margin':'0'}} />
            <form onSubmit={submit} style={{'padding':'10px','height':'auto','display':'block','margin':'50px 0','border':'1px solid black'}} className="polaroid">
                <Label class="col-xl-3 col-12" text="Source Name" />
                <DropDown id="source" class="col-xl-7 col-12" /><br />
                <Label class="col-xl-3 col-12" text="Enable Logging" />
                <div className="pretty p-svg p-plain col-xl-7 col-12" style={{'marginTop': '20px'}}>
                    <input type="checkbox" id="logging" onChange={changeHandler} value={val} />
                    <div className="state">
                        <img className="svg" src="../../task.svg" alt="" />
                        <label></label>
                    </div>
                </div><br />
                <Label class="col-xl-3 col-12" text="Provide SQL" />
                <textarea id="sql" style={{'marginTop': '20px'}} className="col-xl-7 col-12" rows="3" cols="30" /><br />
                <Label class="col-xl-3 col-12" text="Target Result" />
                <DropDown id="target" class="col-xl-7 col-12" /><br />
                <Button text="Cancel" color="secondary" style={{'margin':'30px 20px 0px 0px'}} />
                <Button id="task2_submit" text="Submit" style={{'backgroundColor':'#47c20a','color':'white','margin':'30px 20px 0px 20px'}} />
                <Button text="Validate" color="primary" style={{'margin':'30px 20px 0px 20px'}} />
            </form>
            </center>
        </div>
        </Zoom>
    );
}

export default Task2;