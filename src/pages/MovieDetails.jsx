import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ruth from "../assets/images/ruth.jpeg"; // Use the same background image as Home

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setLoading(true);
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        if (!res.ok) throw new Error("Failed to fetch movie details");
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (loading)
    return <p className="text-center text-white mt-10">Loading details...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  return (
    <div className="relative min-h-screen w-full">
      {/* Background image */}
      <img
        src={ruth}
        alt="Movies background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blur + dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-red-900/30 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 p-6 max-w-5xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-block mb-6 text-red-400 hover:text-red-500 transition"
        >
          ← Back to Home
        </Link>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Poster */}
          {movie.image?.original ? (
            <img
              src={movie.image.original}
              alt={movie.name}
              className="w-72 rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-72 h-96 bg-gray-700 flex items-center justify-center rounded-lg">
              No Image
            </div>
          )}

          {/* Movie info */}
          <div className="flex-1 text-white">
            <h1 className="text-3xl font-bold mb-3 text-red-400">{movie.name}</h1>
            <p className="text-gray-300 mb-3">
              <strong>Language:</strong> {movie.language}
            </p>
            <p className="text-gray-300 mb-3">
              <strong>Genres:</strong> {movie.genres.join(", ")}
            </p>
            <p className="text-gray-300 mb-3">
              <strong>Rating:</strong> {movie.rating?.average || "N/A"}
            </p>
            {movie.officialSite && (
              <p className="mb-3">
                <a
                  href={movie.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:underline"
                >
                  Visit Official Site
                </a>
              </p>
            )}
            <div
              className="text-gray-300 mt-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: movie.summary }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
