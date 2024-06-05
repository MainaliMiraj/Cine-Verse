import Image from "next/image";
import { basicImageUrl } from "@/Misc/misc";
import Link from "next/link";

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}


export interface MovieCardDetailsProps {
  image: string;
  title: string;
  releaseDate: string;
  details: string;
  productionCompany: ProductionCompany[] | null;
  website_url: string;
  imdbRating: string;
}

function MovieCardDetails({
  image,
  title,
  releaseDate,
  details,
  productionCompany,
  website_url,
  imdbRating,
}: MovieCardDetailsProps) {
  return (
    <div className="mx-auto mt-20 flex max-w-6xl flex-col items-start gap-6 rounded-md border-2  border-blue-400 p-2 text-blue-300 md:flex-row md:gap-12 md:py-12">
      <div className="w-full flex-shrink-0  rounded-lg transition-all hover:scale-95 md:w-[300px] lg:w-[350px]">
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
      <div className="flex flex-col gap-y-2">
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <span>Released on: {releaseDate}</span>
        </div>
        <p className="text-lg leading-relaxed">{details}</p>
        <label className="-mt-2 underline underline-offset-1">
          <Link
            href={website_url ?? ""}
            target="_blank"
            className="hover:text-blue-100"
          >
            Read more
          </Link>
        </label>
        <div className="text-orange-400">
          IMDB:
          <span className="ml-2 text-orange-500">
            {parseFloat(imdbRating).toFixed(1)}
          </span>
        </div>

        {productionCompany && (
          <div className="flex justify-start gap-x-4">
            <div className="rounded-lg hover:border-white">
              <label className="text-2xl text-blue-200 underline">
                {" "}
                Produced by:
              </label>
              <div className="gap-y-2">
                {productionCompany.map((eachDetail) => (
                  <div key={eachDetail.id}>
                    <div className="flex flex-col">
                      <div>{eachDetail.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCardDetails;
