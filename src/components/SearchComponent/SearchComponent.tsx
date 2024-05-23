import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";


interface SearchComponentProps {
  inputPlaceholder: string;
}

const SearchComponent = ({ inputPlaceholder }: SearchComponentProps) => {
  const [searchText, setSearchText] = useState("");
  function handleClick() {
    setSearchText("");
  }

  return (
    <div className="mt-6 flex w-11/12 items-center justify-between rounded-full border border-blue-300 text-blue-300 focus:border-blue-600 sm:w-10/12 lg:w-8/12">
      <input
        type="search"
        placeholder={inputPlaceholder}
        className="  w-6/12 flex-grow rounded-full bg-transparent p-4 text-center placeholder-blue-200 caret-blue-400 outline-none transition-all duration-75 focus:scale-105"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="h-14 grow-0 border-l border-blue-300"></div>

      <div className="flex grow-0 items-center justify-center p-0">
        <button
          className="bt-transparent flex w-32 cursor-pointer items-center justify-center gap-1 p-1 text-2xl transition-all hover:scale-125"
          onClick={handleClick}
        >
          <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
