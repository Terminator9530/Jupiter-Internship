import React from 'react';

function Toggler(props){
    return (
        <span className={props.class}>
            <div className="pretty p-switch p-fill" style={{'marginTop': '20px'}}>
                <input type="checkbox" name={props.name} />
                <div className="state p-primary">
                    <label></label>
                </div>
            </div>
        </span>
    );
}

export default Toggler;