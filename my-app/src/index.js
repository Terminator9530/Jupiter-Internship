import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from "./nav/AppBar";
import Drawer from "./drawer/Drawer";

ReactDOM.render(
  <AppBar />,
  document.getElementById('nav')
);
ReactDOM.render(
  <Drawer />,
  document.getElementById('drawer')
);