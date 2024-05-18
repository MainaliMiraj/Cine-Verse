import MovieCard from "@/components/MovieCardComponent/MovieCard";
import SearchComponent from "@/components/SearchComponent/SearchComponent";

export default function Home() {
  return (
    <div className="flex  flex-col items-center">
      <SearchComponent inputPlaceholder={"Search your movie here..."} />
      <div className="text-blue-300 mt-16 text-2xl">Popular Movies</div>
      <div className="my-6 mt-6 grid w-10/12 grid-cols-2 gap-y-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}
