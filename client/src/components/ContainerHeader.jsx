import moment from "moment";
import { MdMenu } from "react-icons/md";
import { useConversation } from "../store/conversationStore";

const ContainerHeader = () => {
  const { sidebarVisible, setSidebarVisible, selectedConversation } =
    useConversation((state) => ({
      sidebarVisible: state.sidebarVisible,
      setSidebarVisible: state.setSidebarVisible,
      selectedConversation: state.selectedConversation,
    }));

  return (
    <div className="bg-slate-500 h-[50px] text-white w-full flex items-center justify-between px-4">
      <div className="flex items-center">
        <button
          className="md:hidden mr-3 bg-transparent hover:bg-transparent"
          onClick={() => setSidebarVisible(true)}
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
      <div className="flex-1 flex justify-end text-sm">
        {moment(Date.now()).format("llll")}
      </div>
    </div>
  );
};

export default ContainerHeader;
