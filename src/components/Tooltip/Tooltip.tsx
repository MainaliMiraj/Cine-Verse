import React from "react";

interface Movie {
  original_title: string;
  overview: string;
}

const Tooltip = ({ original_title, overview }: Movie) => {
  return (
    <div className="p-2 overflow-scroll w-full h-full transition-all">
      <h3 className="mb-1 text-lg font-semibold">{original_title}</h3>
      <p className="text-sm text-blue-400">{overview}</p>
    </div>
  );
};

export default Tooltip;
