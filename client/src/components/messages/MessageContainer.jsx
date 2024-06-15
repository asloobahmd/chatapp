import { MdMenu } from "react-icons/md";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import { useConversation } from "../../store/conversationStore";
import { useEffect } from "react";

const MessageContainer = ({ setsidebarVisible, sideBarVisible }) => {
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
        <NoChatSelected
          setsidebarVisible={setsidebarVisible}
          sideBarVisible={sideBarVisible}
        />
      ) : (
        <div className="flex flex-col  h-full">
          {/* header */}
          <div className="bg-slate-500 h-[50px] text-white w-full flex items-center justify-between px-4">
            <div className="flex items-center">
              <button
                className="md:hidden mr-3 bg-transparent hover:bg-transparent"
                onClick={() => setsidebarVisible(true)}
              >
                <MdMenu size={30} />
              </button>
              <div className="flex items-center">
                <span className="label-text mr-1">To:</span>
                <span className="text-white font-bold">
                  {selectedConversation?.username}
                </span>
              </div>
            </div>
            <div className="flex-1 flex justify-end">date</div>
          </div>

          <Messages />
          <MessageInput />
        </div>
      )}
    </div>
  );
};

export default MessageContainer;
