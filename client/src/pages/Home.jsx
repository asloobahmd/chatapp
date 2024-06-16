import { useState } from "react";
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="container h-screen md:h-[90%] flex relative">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
