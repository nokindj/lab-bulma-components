import React from "react";

function CoolButton(props) {
    return (
        <div>
        <button id="cool-button" className={props.className}>{props.name}</button>
     
    </div>
    )
}


export default CoolButton;