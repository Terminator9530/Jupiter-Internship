import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

function TextField(props){
    const [val,setVal]=React.useState("");

    function changeText(event){
        setVal(event.target.value);
    }
    const a="textField "+props.class;
    return(
        <FormControl variant="outlined">
          <OutlinedInput
            className={a}
            id="outlined-adornment-weight"
            value={val}
            onChange={changeText}
            aria-describedby="outlined-weight-helper-text"
            labelWidth={0}
          />
        </FormControl>
    );
}

export default TextField;