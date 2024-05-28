"use client";

import React, { useState } from "react";
import MovieCard from "@/components/MovieCardComponent/MovieCard";
import { useEffect } from "react";

import { Movie } from "@/app/page";

const NowPlaying = () => {
  const [nowPlaying, setNowlaying] = useState<Movie[]>([]);

  useEffect(() => {
    async function getNowPlaying() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.NEXT_PUBLIC_BEARER_ID as string,
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
          <MovieCard key={eachMovie.id} {...eachMovie} />
        ))}
      </div>
    </div>
  );
};

export default NowPlaying;
