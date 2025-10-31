import { useState, useEffect } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error("Error loading favorites:", error);
        setFavorites([]);
      }
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite - add if not present, remove if present
  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((fav) => fav.id === movie.id);
      if (exists) {
        // Remove from favorites
        return prevFavorites.filter((fav) => fav.id !== movie.id);
      } else {
        // Add to favorites
        return [...prevFavorites, movie];
      }
    });
  };

  // Check if a movie is already in favorites
  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return { favorites, toggleFavorite, isFavorite };
}

export default useFavorites;