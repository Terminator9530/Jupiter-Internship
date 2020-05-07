import React from 'react';

function Toggler(props){
    const [val,setVal]=React.useState("off");
    function changeHandler(event){
        if(event.target.value==="off"){
            setVal("on");
        } else {
            setVal("off");
        }
    }
    return (
        <span className={props.class}>
            <div className="pretty p-switch p-fill" style={{'marginTop': '20px'}}>
                <input type="checkbox" id={props.id} onChange={changeHandler} value={val} />
                <div className="state p-primary">
                    <label></label>
                </div>
            </div>
        </span>
    );
}

export default Toggler;