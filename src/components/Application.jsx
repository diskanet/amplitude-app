import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { axios } from "../services";

import { HomePage, BookmarksPage, MoviePage, NotFound } from "../pages";
import { HOME_PAGE, BOOKMARKS_PAGE, MOVIE_PAGE } from "../constants";
import { Loader } from "../components/custom/Loader";

export const Application = () => {
  const [movieGenres, setMovieGenres] = useState([{}]);

  const getMovieData = useCallback(() => {
    axios.get("/movie/popular").then(
      ({
        data: {
          results: [
            {
              genres = [{}],
            },
          ],
        },
      }) => {
        setMovieGenres(genres);
        console.log(genres);
      }
    );
  }, []);

  useEffect(() => {
    getMovieData();
  }, [getMovieData]);

  if (!movieGenres) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={BOOKMARKS_PAGE} element={<BookmarksPage />} />
        <Route path={`${MOVIE_PAGE}/:movieId`} element={<MoviePage />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to={HOME_PAGE} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
