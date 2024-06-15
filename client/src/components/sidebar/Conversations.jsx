import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";

const Conversations = () => {
  const { conversations, isLoading } = useGetConversation();

  return (
    <div className="flex flex-col gap-1 flex-1 h-[80%] overflow-y-auto ">
      {isLoading ? (
        <div className="text-white">Loading...</div>
      ) : conversations.length === 0 ? (
        <div className="text-white">No conversations</div>
      ) : (
        conversations.map((convo, index) => (
          <Conversation
            key={convo._id}
            conversation={convo}
            lastIndex={index === conversations.length - 1}
          />
        ))
      )}
    </div>
  );
};

export default Conversations;
