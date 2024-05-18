import React from "react";
import Button from "../Buttons/Buttons";
import { CiSearch } from "react-icons/ci";

interface SearchComponentProps {
  buttonName?: string;
  inputPlaceholder: string;
}

const SearchComponent = ({
  inputPlaceholder,
}: SearchComponentProps) => {
  return (
    <div className="mt-6 flex w-11/12 items-center justify-between rounded-full border border-blue-300 text-blue-300 focus:border-blue-600 sm:w-10/12 lg:w-8/12">
      <input
        type="search"
        placeholder={inputPlaceholder}
        className="  w-8/12 flex-grow rounded-full bg-transparent p-4 text-center placeholder-blue-200 caret-blue-400 outline-none transition-all duration-75 focus:scale-105"
      />

      <div className="h-14 grow-0 border-l border-blue-300"></div>

      <div className="flex grow-0 items-center justify-center p-0">
        <Button
          bgColor="bg-transparent"
          icon={CiSearch}
          textColor="text-blue-300"
        />
      </div>
    </div>
  );
};

export default SearchComponent;
