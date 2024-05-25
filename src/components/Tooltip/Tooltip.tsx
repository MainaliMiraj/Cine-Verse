import React from "react";

interface Movie {
  original_title: string;
  overview: string;
}

const Tooltip = ({ original_title, overview }: Movie) => {
  return (
    <div className="flex flex-col overflow-scroll p-2">
      <h3 className="mt-2 text-center text-lg font-bold">{original_title}</h3>

      <div className="cursor-scroll mb-1 mt-6 max-h-48 overflow-hidden overflow-y-auto p-1 text-sm text-blue-400 transition-all">
        {overview || "N/A"}
      </div>
    </div>
  );
};

export default Tooltip;
