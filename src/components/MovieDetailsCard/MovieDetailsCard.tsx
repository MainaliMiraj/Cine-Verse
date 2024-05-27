import Image from "next/image";
import { basicImageUrl } from "@/Misc/misc";

interface MovieCardDetailsProps {
  image: string;
  title: string;
  year: string;
  directorName: string;
  details: string;
}

function MovieCardDetails({
  image,
  title,
  year,
  directorName,
  details,
}: MovieCardDetailsProps) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-md border-2 border-blue-400 px-4 py-8 text-blue-300 md:flex-row md:gap-12 md:py-12">
      <div className="w-full flex-shrink-0 overflow-hidden rounded-lg md:w-[300px] lg:w-[350px]">
        <Image
          alt="Movie Poster"
          className="h-auto w-full object-cover"
          height="450"
          src={`${basicImageUrl}${image}`}
          style={{
            aspectRatio: "300/450",
            objectFit: "cover",
          }}
          width="300"
        />
      </div>
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
          <span>{year}</span>
          <span>•</span>
          <span>Directed by {directorName}</span>
        </div>
        <p className="text-lg leading-relaxed">{details}</p>
      </div>
    </div>
  );
}
export default MovieCardDetails;
