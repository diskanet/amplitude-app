import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { axios } from "@services";

import { Loader } from "@components/custom/Loader";
import { SaveButtonMovie } from "@components/interface/SaveButtonMovie";
import { Header } from "@components/layout/Header";

export const MoviePage = () => {
  const { movieId } = useParams();
  const [data, setData] = useState(null);

  const getMovieData = useCallback(() => {
    axios.get(`/movie/${movieId}`).then(({ data }) => {
      setData(data);
    });
  }, [movieId]);

  // Рендер один раз
  useEffect(() => {
    getMovieData();
  }, [getMovieData]);

  if (!data) {
    return <Loader />;
  }

  const {
    title,
    original_title: originalTitle,
    poster_path: posterImage,
    vote_average: movieRating,
    release_date: releaseDate,
    runtime,
    tagline,
    overview,
  } = data;

  return (
    <div className="content-view">
      <Header />
      <main className="content pv-24">
        <div className="wrapper flex gap-12 flex-wrap">
          <article className="movie-details flex flex-col gap-24 flex-1">
            <header className="movie-header flex flex-col gap-8">
              <h1 className="movie-header__title">{title}</h1>
              <h2 className="movie-header__original">{originalTitle}</h2>
            </header>
            <div className="flex gap-40 flex-1">
              <div className="poster-container">
                <img
                  src={`https://image.tmdb.org/t/p/w500${posterImage}`}
                  alt=""
                  className="poster"
                />
              </div>
              <section className="movie-details flex flex-col flex-1 gap-32">
                <div className="flex flex-col gap-8">
                  <div className="movie-details__row flex gap-8">
                    <h3 className="movie-details__label">Rating:</h3>
                    <p className="movie-details__value">
                      <span className="rating">{movieRating}</span>
                    </p>
                  </div>
                  <div className="movie-details__row flex gap-8">
                    <h3 className="movie-details__label">Release date:</h3>
                    <p className="movie-details__value">{releaseDate}</p>
                  </div>
                  <div className="movie-details__row flex gap-8">
                    <h3 className="movie-details__label">Genre:</h3>
                    <p className="movie-details__value">
                      Genre1, genre2, genre3
                    </p>
                  </div>
                  <div className="movie-details__row flex gap-8">
                    <h3 className="movie-details__label">Runtime:</h3>
                    <p className="movie-details__value">{runtime} minutes</p>
                  </div>
                  <div className="movie-details__row flex gap-8">
                    <h3 className="movie-details__label">Slogan:</h3>
                    <p className="movie-details__value quotte">
                      &#34;{tagline}&#34;
                    </p>
                  </div>
                </div>
                <hr className="separator" />
                <SaveButtonMovie />
                <hr className="separator" />
                <p className="movie-details__about">{overview}</p>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};
