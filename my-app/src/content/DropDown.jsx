import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 245,
  }
}));

function DropDown(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const a=classes.formControl+" "+props.class;

  return (
      <FormControl className={a}>
        <Select
          id={props.id}
          value={age}
          onChange={handleChange}
          displayEmpty
          className={"textField"}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Sample1</MenuItem>
          <MenuItem value={20}>Sample2</MenuItem>
          <MenuItem value={30}>Sample3</MenuItem>
          <MenuItem value={40}>Sample4</MenuItem>
          <MenuItem value={50}>Sample5</MenuItem>
        </Select>
      </FormControl>
  );
}

export default DropDown;
