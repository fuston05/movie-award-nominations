// ** MESSAGE COMPONENT **

import React from "react";

export const Message = ({ message, setIsMessage }) => {
  return (
    <div className="messageCont">
      <div className= 'messageClose' onClick= {() => setIsMessage(false)}>X</div>
      <p>{message}</p>
    </div>
  );
};
