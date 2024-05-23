import React from "react";

interface Movie {
  original_title: string;
  overview: string;
}

const Tooltip = ({ original_title, overview }: Movie) => {
  return (
    <div className="flex h-full w-full cursor-pointer flex-col overflow-scroll p-2">
      <h3 className="mb-1 text-lg font-bold ">{original_title}</h3>
      <p className="text-sm text-blue-400 ">{overview || "N/A"}</p>
    </div>
  );
};

export default Tooltip;
