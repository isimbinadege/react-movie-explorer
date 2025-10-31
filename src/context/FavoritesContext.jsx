// src/context/FavoritesContext.jsx
import { createContext, useContext } from "react";
import useFavorites from "../hooks/useFavorites";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const favoritesHook = useFavorites(); // this is the single shared state
  return (
    <FavoritesContext.Provider value={favoritesHook}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}
