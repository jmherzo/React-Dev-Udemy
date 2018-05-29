import React from 'react';
import './Output.css';

const outputStyle = {
   fontSize: '20px'
}

const userOutput = (props) => {
   return(
      <div style= {outputStyle}>
         <p >Username:</p>
         <p className="output-username">{props.username}</p>
      </div>
   )
};

export default userOutput;