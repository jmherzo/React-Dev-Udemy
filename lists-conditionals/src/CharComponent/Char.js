import React from 'react';
import './char.css'

const charCmp = (props) => {
   return(
      <div className="Char" onClick={props.click}>
         <p>{props.charVal}</p>
      </div>
   )
};

export default charCmp;