import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';

function TextField(props){
    const [val,setVal]=React.useState({err:true,errText:"Should Not Be Empty",val:""});
    var err,errText;

    function validate(txt){
      var pattern=/^[a-zA-Z ]*$/;
      return pattern.test(txt);
    }

    function changeText(event){
      if(event.target.value.trim()!=""){
          err=false;
          errText="";
          if(event.target.value.trim().length>30){
            err=true;
            errText="Length Should not be greater than 30";
          } else {
            if(!validate(event.target.value.trim())){
              err=true;
              errText="Contains only text";
            }
          }
      } else {
        err=true;
        errText="Should Not Be Empty";
      }
        setVal({err:err,errText:errText,val:event.target.value.trim()});
    }
    const a="textField "+props.class;
    return(
        <FormControl variant="outlined" error={val.err}>
          <OutlinedInput
            className={a}
            name={props.name}
            value={val.val}
            onChange={changeText}
            aria-describedby="outlined-weight-helper-text"
            labelWidth={0}
          />
          <FormHelperText id="outlined-weight-helper-text">{val.err?val.errText:""}</FormHelperText>
        </FormControl>
    );
}

export default TextField;