import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-4 p-2 h-[60px] bg-gray-100 hover:bg-gray-300 text-black cursor-pointer rounded-md">
        <div className="avatar online">
          <div className="w-14 h-14 rounded-full">
            <img src="https://avatar.iran.liara.run/public/boy" />
          </div>
        </div>
        <span>John</span>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
