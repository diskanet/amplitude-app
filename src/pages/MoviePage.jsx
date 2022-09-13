import React from "react";

import ukraine from "../assets/img/ukraine.jpeg";
import { Header } from "../components/layout/Header";

export const MoviePage = () => {
  return (
    <div className="content-view">
      <Header />
      <main className="content pv-24">
        <div className="wrapper flex gap-12 flex-wrap">
          <article className="movie-details">
            <header className="movie-header"></header>
            <div className="flex gap-40">
              <div className="poster-container">
                <img src={ukraine} alt="" className="poster" />
              </div>
              <section className="movie-info flex flex-col gap-32"></section>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};
