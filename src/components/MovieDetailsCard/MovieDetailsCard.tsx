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
    <div className="mx-auto mt-20 flex max-w-6xl flex-col items-start gap-6 rounded-md border-2  border-blue-400 p-2 text-blue-300 md:flex-row md:gap-12 md:py-12">
      <div className="w-full flex-shrink-0 overflow-hidden rounded-lg transition-all hover:scale-95 md:w-[300px] lg:w-[350px]">
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

        {productionCompany && (
          <div>
            Produced by:
            <div className="flex justify-between gap-4 mt-2 m-w-48">
              {productionCompany.map((eachDetail) => (
                <div key={eachDetail.id} className="flex justify-between gap-4 items-center">
                  <div className="h-10 w-10 ">
                    <Image
                      src={`${basicImageUrl}${eachDetail.logo_path}`}
                      height={100}
                      width={100}
                      alt="productionImage"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>{eachDetail.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCardDetails;
