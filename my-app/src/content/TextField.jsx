import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

function TextField(){
    const [val,setVal]=React.useState("");

    function changeText(event){
        setVal(event.target.value);
    }
    return(
        <FormControl variant="outlined">
          <OutlinedInput
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