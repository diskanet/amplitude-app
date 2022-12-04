import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { BOOKMARKS_PAGE, HOME_PAGE, MOVIE_PAGE } from "@constants";

import { BookmarksPage, HomePage, MoviePage, NotFound } from "@pages";

import { saveGenres } from "../actions/actions";
import { genresSelector } from "../selectors/genre.selectors";

import { Loader } from "./custom";

export const Application = () => {
  const dispatch = useDispatch();

  const genres = useSelector(genresSelector);
  useEffect(() => {
    dispatch(saveGenres());
  }, [dispatch]);

  if (genres.length === 0) {
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
