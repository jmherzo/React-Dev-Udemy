import React from 'react';

const Validation = (props) => {
   let message = "";
   
   if( props.charCountVal > 4 )
      message = <div>Text long enough</div>;
   else
      message = <div>Text too short</div>;

   const validationStyle = {
      marginTop: "1rem"
   }

   return (
      <div style={validationStyle}>
         {message}
      </div>
   )
};

export default Validation;