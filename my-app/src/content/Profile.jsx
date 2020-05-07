import React from "react";
import Button from "./Button";
import Label from "./Label";
import DatePicker from "./DatePicker";
import Zoom from '@material-ui/core/Zoom';
import TextField from './TextField';


function Profile(){
    const [err,setErr]=React.useState({name:"",prof:"",desg:""});
    //const [stateName,setName] = React.useState("");    
    function validate(txt){
        var pattern=/^[a-zA-Z ]*$/;
        return pattern.test(txt);
      }
  
      function changeText(txt,key){
        if(txt!==""){         
            if(txt.length>30){
              return "Length Should not be greater than 30";
            } else {
              if(!validate(txt)){
                return "Contains only text";
              }
            }
        } else {
          return "Should Not Be Empty";
        }
        return "";
    }
    function submit(e){
        e.preventDefault();
        console.log("clicked");
        var name=document.getElementById("Name").value;
        var DOB=document.getElementById("DOB").value;
        var prof=document.getElementById("Profession").value;
        var desg=document.getElementById("Designation").value;
        //console.log(name,DOB,prof,desg);
        var nameErr = changeText(name,"name");        
        var desgErr = changeText(desg,"desg");
        var profErr = changeText(prof,"prof");
        console.log(nameErr,desgErr,profErr);
        if((nameErr=="")&&(desgErr=="")&&(profErr=="")){
            console.log("Valid");
            // put your submit code here
        } else {
            console.log("Invalid");
        }
        setErr({...err,name:nameErr,desg:desgErr,prof:profErr});
    }
    //console.log("state changed", JSON.stringify(err));
   return(
        <Zoom in={true}>
        <div style={{'margin':'50px auto','width':'60%','height':'auto'}}>
            <center><Label text="Profile Info" style={{'margin':'0'}} />
            <form onSubmit={submit} style={{'padding':'10px','height':'auto','display':'block','margin':'50px 0','border':'1px solid black'}} className="row polaroid">
                <Label class="col-xl-2 col-md-12 col-12" text="Name" />
                <TextField err={err.name} id="Name" class="col-xl-8 col-md-12 col-12" /><br />
                <Label class="col-xl-2 col-md-12 col-12" text="DOB" />
                <DatePicker id="DOB" class="col-xl-8 col-md-12 col-12" /><br />
                <Label class="col-xl-2 col-md-12 col-12" text="Profession" />
                <TextField err={err.prof} id="Profession" class="col-xl-8 col-md-12 col-12" /><br />
                <Label class="col-xl-2 col-md-12 col-12" text="Designation" />
                <TextField err={err.desg} id="Designation" class="col-xl-8 col-md-12 col-12" /><br />
                <Button text="Cancel" color="secondary" style={{'margin':'30px 20px 0px 0px'}} /> 
                <Button id="set_submit" text="Submit" style={{'backgroundColor':'#47c20a','color':'white','margin':'30px 0px 0px 20px'}} />
            </form></center>
        </div>
        </Zoom>
    );
}

export default Profile;