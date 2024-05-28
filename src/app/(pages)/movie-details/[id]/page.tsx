"use client";
import { useParams } from "next/navigation";
import MovieCardDetails from "@/components/MovieDetailsCard/MovieDetailsCard";
function MovieCardDetailsPage() {
  const params = useParams();

  return <div className="text-white">movie details here</div>;
}
export default MovieCardDetailsPage;
