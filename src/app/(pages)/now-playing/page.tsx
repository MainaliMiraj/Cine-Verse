"use client";

import React, { useState } from "react";
import MovieCard from "@/components/MovieCardComponent/MovieCard";
import { useEffect } from "react";
import { basicImageUrl } from "@/app/page";
import { Movie } from "@/app/page";

const NowPlaying = () => {
  const [nowPlaying, setNowlaying] = useState<Movie[]>([]);

  useEffect(() => {
    async function getNowPlaying() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzNhOGJmNTAxMzAwYmFhYTYxOTFiMTI1YjIwZGJmNiIsInN1YiI6IjY0NDRjZDNhMmM2YjdiMDQ5NDdlZGVhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yPzKlBkc8IP670jo1Bl2g8QXa5JnLGUxaqT6Jdp0awE",
        },
      };
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        options,
      );
      const data = await response.json();
      const { results } = data;
      setNowlaying(results);
    }
    getNowPlaying();
  }, []);
  

  return (
    <div className="relative  flex flex-col items-center">
      <div className="mt-16 text-2xl text-blue-300">Now Playing</div>
      <div className="my-6 mt-6 grid w-10/12 grid-cols-2 gap-y-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {nowPlaying.map((eachMovie) => (
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
  );
};

export default NowPlaying;
