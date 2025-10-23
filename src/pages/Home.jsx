import React, { useState, useEffect } from "react";
import ruth from "../assets/images/ruth.jpeg"
function Home  () {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    // Simulate an API call with a short timeout
    const timer = setTimeout(() => {
      const sample = [
        { id: 1, name: "Sample Movie", genres: ["Drama"], image: { medium: "" } },
        { id: 2, name: "Another Movie", genres: ["Action"], image: { medium: "" } }
      ];
      setMovies(sample);
      setLoading(false);
    }, 600);
        return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full">
 
  <img
    src={ruth}
    alt="Movies background"
    className="absolute inset-0 w-full h-full object-cover"
  />

 
<div className="absolute inset-0 bg-gradient-to-b from-black to-red-900/60 backdrop-blur-sm"></div>


  
  <div className="relative z-10 pt-20 px-4 ">
    
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 tracking-wide text-white">
      Dive Into Cinema
    </h1>

    {/* Movie list */}
    {loading ? (
      <p className="text-center text-white mt-10">Loading...</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-xl p-4 flex flex-col items-center transform transition duration-200 hover:scale-105 hover:shadow-lg"
          >
            <div className="h-64 w-full bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              Poster
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center text-white">
              {movie.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 text-center">
              {movie.genres.join(", ")}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

  )
}

export default Home