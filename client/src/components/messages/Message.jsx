import React from "react";

const Message = ({ message }) => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://avatar.iran.liara.run/public/boy" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        13:50
      </div>
    </div>
  );
};

export default Message;
