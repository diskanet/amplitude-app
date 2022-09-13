import React from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";

import { HomePage, BookmarksPage, MoviePage, NotFound } from "../pages";
import { HOME_PAGE, BOOKMARKS_PAGE, MOVIE_PAGE } from "../constants";

export const Application = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={BOOKMARKS_PAGE} element={<BookmarksPage />} />
        <Route path={MOVIE_PAGE} element={<MoviePage />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to={HOME_PAGE} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
