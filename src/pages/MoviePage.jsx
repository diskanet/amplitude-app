import React from "react";

import ukraine from "../assets/img/ukraine.jpeg";
import { Header } from "../components/layout/Header";
import { SaveButtonMovie } from "../components/interface/SaveButtonMovie";

export const MoviePage = ({ detailsLabel, detailsValue }) => {
  return (
    <div className="content-view">
      <Header />
      <main className="content pv-24">
        <div className="wrapper flex gap-12 flex-wrap">
          <article className="movie-details flex flex-col gap-24 flex-1">
            <header className="movie-header flex flex-col gap-8">
              <h1 className="movie-header__title">Movie Title</h1>
              <h2 className="movie-header__original">Original Title</h2>
            </header>
            <div className="flex gap-40 flex-1">
              <div className="poster-container">
                <img src={ukraine} alt="" className="poster" />
              </div>
              <section className="movie-details flex flex-col flex-1 gap-32">
                <div className="flex flex-col gap-8">
                  <div className="movie-details__row flex gap-8">
                    <h3 className="movie-details__label">Rating:</h3>
                    <p className="movie-details__value">
                      <span className="rating">8.0</span>
                    </p>
                  </div>
                  <div className="movie-details__row flex gap-8">
                    <h3 className="movie-details__label">Release date:</h3>
                    <p className="movie-details__value">20 June 2022</p>
                  </div>
                  <div className="movie-details__row flex gap-8">
                    <h3 className="movie-details__label">Genre:</h3>
                    <p className="movie-details__value">
                      Genre1, genre2, genre3
                    </p>
                  </div>
                  <div className="movie-details__row flex gap-8">
                    <h3 className="movie-details__label">Runtime:</h3>
                    <p className="movie-details__value">90 minutes</p>
                  </div>
                </div>
                <hr className="separator" />
                <SaveButtonMovie />
                <hr className="separator" />
                <p className="movie-details__about">
                  After his retirement is interrupted by Gorr the God Butcher, a
                  galactic killer who seeks the extinction of the gods, Thor
                  Odinson enlists the help of King Valkyrie, Korg, and
                  ex-girlfriend Jane Foster, who now wields Mjolnir as the
                  Mighty Thor. Together they embark upon a harrowing cosmic
                  adventure to uncover the mystery of the God Butcher’s
                  vengeance and stop him before it’s too late.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};
