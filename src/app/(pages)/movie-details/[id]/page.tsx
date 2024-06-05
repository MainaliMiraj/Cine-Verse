"use client";
import { useParams } from "next/navigation";
import MovieCardDetails from "@/components/MovieDetailsCard/MovieDetailsCard";
import { useEffect, useState } from "react";
function MovieCardDetailsPage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    requestMovieData();

    async function requestMovieData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.NEXT_PUBLIC_BEARER_ID as string,
        },
      };

      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options,
      );
      const data = await res.json();
      setMovieDetails(data);
    }
  }, [id]);

  console.log(movieDetails);

  return (
    <div className="flex items-center justify-center text-white">
      <MovieCardDetails
        title={movieDetails?.title}
        image={movieDetails?.poster_path}
        details={movieDetails?.overview}
        releaseDate={movieDetails?.release_date}
        // key={movieDetails.id}
        productionCompany={movieDetails?.production_companies}
        website_url={movieDetails?.homepage}

      />
    </div>
  );
}
export default MovieCardDetailsPage;
