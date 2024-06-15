import React from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeletons";

const Messages = () => {
  const { messages, isLoading } = useGetMessages();

  return (
    <div className=" flex-1 overflow-auto bg-gray-800">
      {isLoading ? (
        [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)
      ) : messages.length === 0 ? (
        <div className="text-white">
          Send a message to start the conversation
        </div>
      ) : (
        messages.map((message, i) => <Message key={i} message={message} />)
      )}
    </div>
  );
};

export default Messages;
