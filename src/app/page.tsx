import SearchComponent from "@/components/SearchComponent/SearchComponent";

export default function Home() {
  return (
    <div className="flex  flex-col items-center">
      <SearchComponent buttonName={'Search'} inputPlaceholder={"Search your movie here..."}/>
    </div>
  );
}
