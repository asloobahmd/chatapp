import { useState } from "react";
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  const [sideBarVisible, setsidebarVisible] = useState(false);

  return (
    <div className="container h-screen md:h-[90%] flex relative">
      <Sidebar
        setsidebarVisible={setsidebarVisible}
        sideBarVisible={sideBarVisible}
      />
      <MessageContainer
        setsidebarVisible={setsidebarVisible}
        sideBarVisible={sideBarVisible}
      />
    </div>
  );
};

export default Home;
