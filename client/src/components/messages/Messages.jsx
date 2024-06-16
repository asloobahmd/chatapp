import React, { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeletons";
import Message from "./Message";

const Messages = () => {
  const { messages, isLoading } = useGetMessages();

  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className=" flex-1 overflow-auto bg-gray-800 px-4 py-2">
      {isLoading ? (
        [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)
      ) : messages.length === 0 ? (
        <p className="text-gray-400 text-center">
          Send a message to start the conversation
        </p>
      ) : (
        messages.map((message, i) => (
          <div key={i} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))
      )}
    </div>
  );
};

export default Messages;
