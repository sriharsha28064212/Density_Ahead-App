import React from "react";

function Content(props){
    return(
    <li>
        <div className="right_content">
            <h5>{props.heading}</h5>
            <p>{props.desc}</p>
        </div>
    </li>
    );
}


export default Content;