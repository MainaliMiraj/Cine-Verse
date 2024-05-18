import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface MovieCardProps {
  image: string;
  rating: string;
  year: string;
  movieName: string;
}

const MovieCard = ({ image, rating, year, movieName }: MovieCardProps) => {
  return (
    <div className="w-48 rounded-lg border border-blue-400 text-blue-300">
      <div className="relative h-48 w-full">
        <Image
          src={"/images/moviethumbnail.jpg"}
          alt="movie-thumbnail"
          layout="fill"
          className="rounded-t-lg"
        />
      </div>

      <div className="flex justify-around p-2">
        <div className=" flex items-center">
          <FaStar className="mr-1" color="yellow" />
          <span>6.7</span>
        </div>
        <div className=" flex items-center">
          <span>2024</span>
        </div>
        <span className="mr-2 text-orange-700">HD</span>
      </div>
      <div className="mb-2 w-11/12 overflow-clip text-center text-lg font-bold">
        Godzilla x Kong: The New Empire
      </div>
    </div>
  );
};

export default MovieCard;
