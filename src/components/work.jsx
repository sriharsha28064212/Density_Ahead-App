import React from "react";

function Workcard(props){
    return (
        <div className='work-right-cards'>
                <h5>{props.name}</h5>
                <p>{props.desc}</p>
                  
                </div>
    );
}
export default Workcard;