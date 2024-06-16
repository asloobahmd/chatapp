import { MdMenu } from "react-icons/md";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import { useConversation } from "../../store/conversationStore";
import { useEffect } from "react";
import ContainerHeader from "../ContainerHeader";

const MessageContainer = () => {
  const selectedConversation = useConversation(
    (state) => state.selectedConversation
  );
  const setSelectedConversation = useConversation(
    (state) => state.setSelectedConversation
  );

  useEffect(() => {
    // cleanup function
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="flex-[2.3]">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="flex flex-col  h-full">
          <ContainerHeader />

          <Messages />
          <MessageInput />
        </div>
      )}
    </div>
  );
};

export default MessageContainer;
