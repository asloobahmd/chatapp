import React from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = ({ setsidebarVisible, sideBarVisible }) => {
  return (
    <div
      className={`flex-1 border-r border-slate-500 p-4 flex flex-col max-md:absolute bg-slate-500 max-md:bg-indigo-950  z-50  inset-y-0 w-[300px] transition-[left] duration-500 ${
        sideBarVisible ? "left-0" : "left-[-160%]"
      }`}
    >
      <div className="h-full max-md:pt-[40px]">
        <button
          className="absolute top-2 right-2 md:hidden"
          onClick={() => setsidebarVisible(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x "
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <SearchInput />
        <div className="divider px-3 h-1" />
        <Conversations />
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
