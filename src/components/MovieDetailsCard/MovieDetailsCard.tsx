import Image from "next/image";
import { basicImageUrl } from "@/Misc/misc";
import Link from "next/link";

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface MovieCardDetailsProps {
  image: string;
  title: string;
  releaseDate: string;
  details: string;
  productionCompany: ProductionCompany[] | null;
  website_url: string;
}

function MovieCardDetails({
  image,
  title,
  releaseDate,
  details,
  productionCompany,
  website_url,
}: MovieCardDetailsProps) {
  return (
    <div className="mx-auto mt-20 flex max-w-6xl flex-col items-start gap-6 rounded-md border-2  border-blue-400 text-blue-300 md:flex-row md:gap-12 md:py-12">
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
          <span>Released on: {releaseDate}</span>
        </div>
        <p className="text-lg leading-relaxed">{details}</p>
        <Link
          href={website_url ?? ""}
          target="_blank"
          className="underline underline-offset-1 hover:text-blue-600"
        >
          Read more
        </Link>
      </div>

      {/* {productionCompany && ( // Check if productionCompany exists before rendering
        <div>
          Produced by:
          {productionCompany.map((eachDetail) => (
            <div key={eachDetail.id}>
              <div>{eachDetail.logo_path}</div>
              <div>{eachDetail.name}</div>
              <div>{eachDetail.origin_country}</div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default MovieCardDetails;
