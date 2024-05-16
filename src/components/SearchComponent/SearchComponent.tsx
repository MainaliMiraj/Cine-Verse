import React from "react";

const SearchComponent = () => {
  return (
    <div className="flex w-full justify-center">
      <input
        type="search"
        placeholder="Search your movie here..."
        className="p-4 mt-32 rounded-full w-10/12 text-center border-2 border-orange-300 placeholder-orange-200 caret-orange-400 place outline-none focus:border-orange-400"
      />
    </div>
  );
};

export default SearchComponent;
