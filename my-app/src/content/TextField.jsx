import React from 'react';
function TextField(props) {
  const [val, setVal] = React.useState({err:"",val:""});
  function validate(txt){
        var pattern=/^[a-zA-Z ]*$/;
        return pattern.test(txt);
      }
  
      function changeText(event){
        
        var inputVal = event.target.value.trimLeft().replace(/\s\s+/g, ' ');
        console.log("input",inputVal);
        if(inputVal!==""){         
            if(inputVal.length>30){
              return setVal({...val,err:"Length Should not be greater than 30",val:inputVal});
            } else {
              if(!validate(inputVal)){
                console.log("no number");
                return setVal({...val,err:"Contains only text",val:inputVal});
              }
            }
        } else {
          return setVal({...val,err:"Should Not Be Empty",val:inputVal});
        }
        return setVal({...val,err:"",val:inputVal});
    }
  const a = "textField " + props.class + " form-control";
  console.log("val",val);
  return (
    <span className="form-group">
      <input id={props.id} type="text" value={val.val} onChange={changeText} className={a} autoComplete="off" />
      <small className="form-text" style={{ "color": "red" }}>{props.err?props.err:val.err}</small>
    </span>
  );
}

export default TextField;