import { TiMessages } from "react-icons/ti";
import { MdMenu } from "react-icons/md";
import { useAuthContext } from "../../context/AuthContext";
import { useConversation } from "../../store/conversationStore";
import moment from "moment";

const NoChatSelected = () => {
  const { setSidebarVisible } = useConversation((state) => ({
    sidebarVisible: state.sidebarVisible,
    setSidebarVisible: state.setSidebarVisible,
  }));

  const { authUser } = useAuthContext();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-800 relative  ">
      <div className="absolute top-0 border-b border-slate-500 h-[50px] text-white w-full flex items-center justify-between px-4">
        <button
          className="md:hidden mr-3 bg-transparent hover:bg-transparent"
          onClick={() => setSidebarVisible(true)}
        >
          <MdMenu size={30} />
        </button>
        <div className="flex-1 flex justify-end text-sm">
          {moment(Date.now()).format("llll")}
        </div>
      </div>
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser?.username} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default NoChatSelected;
