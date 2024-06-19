import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import useGetConversation from "../../hooks/useGetConversation";
import { useConversation } from "../../store/conversationStore";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const setSelectedConversation = useConversation(
    (state) => state.setSelectedConversation
  );

  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search || search.length < 3) {
      return toast.error("Search term must be atleast 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(search?.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };

  return (
    <form className="flex items-center gap-x-4" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-circle text-white bg-sky-500  border-none">
        <CiSearch className="h-6 w-6" />
      </button>
    </form>
  );
};

export default SearchInput;
