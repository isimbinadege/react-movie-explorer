import React from "react";
import ruth from "../assets/images/ruth.jpeg";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieCard from "../components/MovieCard"; 

function Home() {
  const { movies, loading, error } = useFetchMovies();

  return (
    <div className="relative min-h-screen w-full">
      <img
        src={ruth}
        alt="Movies background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-red-900/30 backdrop-blur-sm"></div>

      <div className="relative z-10 pt-20 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 tracking-wide text-red-500">
          Dive Into Cinema
        </h1>

        {loading && <p className="text-center text-white mt-10">Loading...</p>}
        {error && <p className="text-center text-red-500 mt-10">Error: {error}</p>}

        {!loading && !error && (
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} /> 
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
