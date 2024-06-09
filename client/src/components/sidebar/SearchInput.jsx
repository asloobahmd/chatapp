import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-x-4">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn btn-circle text-white bg-sky-500  border-none">
        <CiSearch className="h-6 w-6" />
      </button>
    </form>
  );
};

export default SearchInput;
