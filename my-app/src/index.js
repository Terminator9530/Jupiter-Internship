import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './content/Button';
import DatePicker from './content/DatePicker';
import Label from './content/Label';
import TextField from './content/TextField';
import PrimarySearchAppBar from './nav/AppBar';
import Toggler from './content/Toggle';

ReactDOM.render(
  <Toggler />,
  document.getElementById('drawer')
);