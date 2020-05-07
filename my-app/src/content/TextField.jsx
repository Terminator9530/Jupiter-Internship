import React from 'react';
function TextField(props) {
  console.log(props.err);
  const [val, setVal] = React.useState("");

  function changeText(event) {
    var inputVal = event.target.value.trimLeft().replace(/\s\s+/g, ' ');
    // if (props.setFn) // if the function is set
    //   props.setFn(inputVal);
    setVal(inputVal);
  }
  const a = "textField " + props.class + " form-control";
  return (
    <span className="form-group">
      <input id={props.id} type="text" value={val} onChange={changeText} className={a} autoComplete="off" />
      <small className="form-text" style={{ "color": "red" }}>{props.err}</small>
    </span>
  );
}

export default TextField;