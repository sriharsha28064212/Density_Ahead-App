import React from "react";

function Slidecard(props) {
    return(
        <div className="slide" style={{backgroundColor:props.color}}>
        <h3>{props.emoji}</h3>
        <p style={{fontWeight:'bold'}}>{props.heading}</p>
        <p>{props.desc}</p>
      </div>
    );
}
export default Slidecard;