import React from "react";
import { useNavigate } from "react-router-dom";

import { MovieCard } from "../components/interface";
import { Header } from "../components/layout";

import { BOOKMARKS_PAGE, MOVIE_PAGE } from "../constants";

export const HomePage = () => {
  const navigate = useNavigate();

  const goToBookmarks = () => {
    navigate(BOOKMARKS_PAGE);
  };

  const goToMovie = () => {
    navigate(MOVIE_PAGE);
  };

  return (
    <div className="content-view">
      <Header onClick={goToBookmarks} />
      <main className="content pv-24">
        <div className="wrapper flex gap-12 flex-wrap">
          <MovieCard onClick={goToMovie} />
          <MovieCard onClick={goToMovie} />
          <MovieCard onClick={goToMovie} />
          <MovieCard onClick={goToMovie} />
          <MovieCard onClick={goToMovie} />
          <MovieCard onClick={goToMovie} />
          <MovieCard onClick={goToMovie} />
          <MovieCard onClick={goToMovie} />
        </div>
      </main>
    </div>
  );
};
