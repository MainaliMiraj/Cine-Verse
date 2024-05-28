"use client";
import { useEffect, useState } from "react";
import SearchComponent from "@/components/SearchComponent/SearchComponent";
import MovieCard from "@/components/MovieCardComponent/MovieCard";

export interface Movie {
  id: number;
  poster_path: string;
  original_title: string;
  vote_average: string;
  release_date: string;
  overview: string;
}

export default function Home() {
  const [moviesData, setMoviesData] = useState<Movie[]>([]);
  const [searchParam, setSearchParam] = useState("");
  useEffect(() => {
    requestMovieData();

    async function requestMovieData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchParam}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      );
      const data = await response.json();
      const { results } = data;
      setMoviesData(results);
    }
  }, [searchParam]);

  function getSearchData(searchDataValue: string) {
    setSearchParam(searchDataValue);
  }

  return (
    <div className="relative  flex flex-col items-center">
      <SearchComponent
        inputPlaceholder={"Search your movie here..."}
        getSearchData={getSearchData}
      />

      {searchParam ? (
        <>
          <div className="mt-4 flex flex-row gap-x-2 text-2xl text-blue-400">
            You searched for:{" "}
            <p className="text-orange-400 underline">{searchParam}</p>
          </div>
          <div className="my-6 mt-6 grid w-10/12 grid-cols-2 gap-y-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {moviesData.map((eachMovie) => (
              <MovieCard key={eachMovie.id} {...eachMovie} />
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
