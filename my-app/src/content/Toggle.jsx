import React from 'react';

function Toggler(props){
    return (
        <span className={props.class}>
            <div class="pretty p-switch p-fill">
                <input type="checkbox" />
                <div class="state p-primary">
                    <label></label>
                </div>
            </div>
        </span>
    );
}

export default Toggler;