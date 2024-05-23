import React, { createContext, useState } from "react";

// Define the type for your movie data
interface MovieData {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  duration: number;
  director: string;
  actors: string[];
  imageUrl: string;
}

// Create a context with the specified type
const MovieContext = createContext<MovieData | null>(null);

interface MovieContextProviderProps {
  children: React.ReactNode;
}

export const MovieContextProvider: React.FC<MovieContextProviderProps> = ({
  children,
}) => {
  const [moviesData, setMoviesData] = useState<MovieData | null>(null);

  // Provide the moviesData state as the context value
  const contextValue = moviesData;

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};
