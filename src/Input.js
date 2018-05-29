import React from 'react';
import './Input.css';

const inputStyle = {
  fontSize: '15px'
}

const userInput = (props) =>{
  return(
    <div className="input" >
      <input type="text" onChange={props.inputChanged} value={props.username} style= {inputStyle}/>
    </div>
  ) 
}

export default userInput;