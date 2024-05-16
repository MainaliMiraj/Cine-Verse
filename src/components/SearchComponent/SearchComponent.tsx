import React from "react";
import Button from "../Buttons/Buttons";
import { CiSearch } from "react-icons/ci";

const SearchComponent = () => {
  return (
    <div className="flex w-full items-center flex-col gap-3 justify-center">
      <input
        type="search"
        placeholder="Search your movie here..."
        className="p-4 mt-32 rounded-full w-10/12 text-center border-2 border-orange-300 placeholder-orange-200 caret-orange-400 place outline-none focus:border-orange-400"
      />
      {/* <button className="rounded-full text-center font-normal border-2 border-orange-300 w-3/12 hover:bg-orange-100">
        Search
      </button> */}
      <div className="border border-orange-300 rounded-lg flex items-center justify-center hover:bg-orange-50">
        <Button
          buttonName="Search"
          bgColor="none"
          icon={CiSearch}
          textColor="text-orange-300"
        />
      </div>
    </div>
  );
};

export default SearchComponent;
