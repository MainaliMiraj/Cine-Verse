"use client";
import { useEffect, useState } from "react";
import SearchComponent from "@/components/SearchComponent/SearchComponent";
import MovieCard from "@/components/MovieCardComponent/MovieCard";
import { MovieContextProvider } from "@/components/context/MovieDataContext";

const basicImageUrl = "https://image.tmdb.org/t/p/w500";
interface Movie {
  id: number;
  poster_path: string;
  original_title: string;
  vote_average: string;
  release_date: string;
  overview: string;
}

export default function Home() {
  const [moviesData, setMoviesData] = useState<Movie[]>([]);
  useEffect(() => {
    requestMovieData();
  }, []);

  async function requestMovieData() {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9`,
    );
    const data = await response.json();
    const { results } = data;
    setMoviesData(results);
  }
  console.log(moviesData)
  return (
    <MovieContextProvider>
      <div className="relative  flex flex-col items-center">
        <SearchComponent inputPlaceholder={"Search your movie here..."} />

        <div className="mt-16 text-2xl text-blue-300">Popular Movies</div>
        <div className="my-6 mt-6 grid w-10/12 grid-cols-2 gap-y-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {moviesData.map((eachMovie) => (
            <MovieCard
              key={eachMovie.id}
              image={`${basicImageUrl}${eachMovie.poster_path}`}
              movieName={eachMovie.original_title}
              rating={eachMovie.vote_average}
              year={eachMovie.release_date}
              overview={eachMovie.overview}

            />
          ))}
        </div>
      </div>
    </MovieContextProvider>
  );
}
