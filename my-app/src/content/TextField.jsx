import React from 'react';

function TextField(props){
    const [val,setVal]=React.useState({err:true,errText:"Should Not Be Empty",val:""});
    var err,errText;

    function validate(txt){
      var pattern=/^[a-zA-Z ]*$/;
      return pattern.test(txt);
    }

    function changeText(event){
      var inputVal=event.target.value.trimLeft().replace(/\s\s+/g, ' ');
      if(inputVal!==""){
          err=false;
          errText="";
          if(inputVal.length>30){
            err=true;
            errText="Length Should not be greater than 30";
          } else {
            if(!validate(inputVal)){
              err=true;
              errText="Contains only text";
            }
          }
      } else {
        err=true;
        errText="Should Not Be Empty";
      }
        setVal({err:err,errText:errText,val:inputVal});
    }
    const a="textField "+props.class+" form-control";
    return(
      <span className="form-group">
          <input name={props.name} type="text" value={val.val} onChange={changeText} className={a} autoComplete="off" />
          <small className="form-text" style={{"color":"red"}}>{val.err?val.errText:""}</small>
      </span>
    );
}

export default TextField;