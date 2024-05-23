// MovieCard.tsx
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Tooltip from "../Tooltip/Tooltip";
import { useState } from "react";

interface MovieCardProps {
  image: string;
  rating: string;
  year: string;
  movieName: string;
  overview: string;
}

const MovieCard = ({
  image,
  rating,
  year,
  movieName,
  overview,
}: MovieCardProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  let roundedNumStr = parseFloat(rating).toFixed(1);

  return (
    <div
      className="relative flex w-48 flex-col justify-between rounded-lg border border-blue-400 text-blue-300"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip ? (
        <Tooltip original_title={movieName} overview={overview} />
      ) : (
        <>
          <div className="relative h-2/3 w-full overflow-hidden">
            <Image
              src={image}
              alt="movie-thumbnail"
              className="max-h-80 w-full rounded-t-lg transition-all hover:scale-105"
              height={100}
              width={100}
            />
          </div>
          <div className="flex justify-around p-2">
            <div className="flex items-center">
              <FaStar className="mr-1" color="yellow" />
              <span>{roundedNumStr}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>{year}</span>
            </div>
            <span className="mr-2 text-orange-700">HD</span>
          </div>
          <div className="w-11/12 flex-1 cursor-pointer overflow-clip text-center text-lg font-bold hover:text-blue-100">
            {movieName}
          </div>
        </>
      )}
    </div>
  );
};

export default MovieCard;
