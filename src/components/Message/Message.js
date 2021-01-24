// ** MESSAGE COMPONENT **

import React from "react";

export const Message = ({ message, setIsMessage }) => {
  return (
    <div className="messageCont" data-testid= 'messageCont'>
      <div data-testid= 'closeBtn' className= 'messageClose' onClick= {() => setIsMessage(false)}>X</div>
      <p>{message}</p>
    </div>
  );
};
