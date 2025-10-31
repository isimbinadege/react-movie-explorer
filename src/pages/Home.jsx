// src/pages/Home.jsx
import React, { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { useFavoritesContext } from "../context/FavoritesContext";
import ruth from "../assets/images/ruth.jpeg";

function Home() {
  const { movies, loading, error } = useFetchMovies();
  const { favorites } = useFavoritesContext();

  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const genres = Array.from(
    new Set(movies.flatMap((movie) => movie.genres || []))
  );

  const filteredMovies = movies.filter((movie) => {
    const matchGenre =
      selectedGenre === "All" || movie.genres?.includes(selectedGenre);
    const matchSearch = movie.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchGenre && matchSearch;
  });

  return (
    <div className="relative min-h-screen w-full">
      <img
        src={ruth}
        alt="Movies background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black to-red-900/30 backdrop-blur-sm"></div>

      <div className="relative z-10 pt-20 px-4">
        <h1 className="text-center text-5xl font-bold text-red-500 mb-6">
          Dive Into Cinema
        </h1>

        <SearchBar search={searchQuery} setSearch={setSearchQuery} />

        <CategoryFilter
          genres={genres}
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
        />

        {loading && <p className="text-center text-white mt-10">Loading...</p>}
        {error && (
          <p className="text-center text-red-500 mt-10">Error: {error}</p>
        )}

        {filteredMovies.length > 0 ? (
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300 text-lg mt-10">
            🎬 No results found for{" "}
            <span className="text-red-400 font-semibold">{searchQuery}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
