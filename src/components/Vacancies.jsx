import React from "react";

function Vcard(props) {
  return (
    <div className='v-card'>
      <p>{props.title}</p>
      <ul>
        <li>
          {props.jobdesc}
        </li>
        <li>
          {props.loc}
        </li>
        <li>
          {props.salary}
        </li>
      </ul>
      <div className="details-button">
        <button>See Details</button>
      </div>

    </div>
  );

}
export default Vcard;