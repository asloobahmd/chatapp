import React from "react";
import { useConversation } from "../../store/conversationStore";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIndex }) => {
  const setSelectedConversation = useConversation(
    (state) => state.setSelectedConversation
  );
  const selectedConversation = useConversation(
    (state) => state.selectedConversation
  );
  const setSidebarVisible = useConversation((state) => state.setSidebarVisible);

  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(conversation?._id);
  const isSelected = selectedConversation?._id === conversation?._id;

  return (
    <>
      <div
        onClick={() => {
          setSelectedConversation(conversation);
          setSidebarVisible(false);
        }}
        className={`flex items-center gap-4 p-2 h-[60px] hover:bg-blue-400 hover:text-white text-black cursor-pointer rounded-md ${
          isSelected ? "text-white bg-blue-400" : "bg-zinc-50"
        }`}
      >
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-14 h-14 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>
        <span>{conversation.username}</span>
      </div>

      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
