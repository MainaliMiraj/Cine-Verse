// MovieCard.tsx
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Tooltip from "../Tooltip/Tooltip";
import { useState } from "react";
import Link from "next/link";
import { Movie } from "@/app/page";
import { basicImageUrl } from "@/Misc/misc";



const MovieCard = (props: Movie) => {
  const { id, original_title, vote_average, overview, release_date,poster_path } = props;
  const [showTooltip, setShowTooltip] = useState(false);
  let roundedNumStr = parseFloat(vote_average).toFixed(1);

  function showDetails() {}

  return (
    <div
      className="ease-in-outrounded-lg relative flex w-48 flex-col justify-between  border border-blue-400 text-blue-300 transition-all"
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip ? (
        <Tooltip original_title={original_title} overview={overview} />
      ) : (
        <>
          <div
            className="relative h-2/3 w-full overflow-hidden"
            onMouseEnter={() => setShowTooltip(true)}
          >
            <Image
              src={`${basicImageUrl}${poster_path}`}
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
              <span>{release_date}</span>
            </div>
            <span className="mr-2 text-orange-700">HD</span>
          </div>
          <div
            className="w-11/12 flex-1 cursor-pointer overflow-clip text-center text-lg font-bold "
            onClick={showDetails}
          >
            <Link href={`/movie-details/${id}`} className="hover:text-blue-100">
              {original_title}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieCard;
