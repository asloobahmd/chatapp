import { MdMenu } from "react-icons/md";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = ({ setsidebarVisible, sideBarVisible }) => {
  const noChatSelected = true;

  return (
    <div className="flex-[2.3]">
      {noChatSelected ? (
        <NoChatSelected
          setsidebarVisible={setsidebarVisible}
          sideBarVisible={sideBarVisible}
        />
      ) : (
        <div className="flex flex-col bg-white gap-1 h-full">
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
                <span className="text-gray-900 font-bold">John</span>
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
