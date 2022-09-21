import React, { useState, useEffect } from "react";
import axios from "axios";

import { getUrl } from "../utils";
import { MovieCard, SearchBar } from "../components/interface";
import { Header } from "../components/layout";
// import { generatePath } from "react-router-dom";

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // const {
  //   original_title: movieTitle,
  //   genres = [{}],
  //   poster_path: poster,
  //   popularity = 0.0,
  // } = data;

  // const [{ name: genre }] = genres;

  // Рендер один раз
  useEffect(() => {
    axios.get(getUrl("/movie/popular")).then((response) => {
      setData(response.data.results);
    });
  }, []);

  const foo = data
    .filter(({ original_title: movieTitle }) =>
      movieTitle.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map(
      ({
        id,
        original_title: movieTitle,
        poster_path: posterImage,
        vote_average: rating,
        // genres: [{ name: genre }],
      }) => {
        return (
          <MovieCard
            key={id}
            poster={"https://image.tmdb.org/t/p/w500" + posterImage}
            rating={rating}
            movieTitle={movieTitle}
            // movieGenre={genre}
          />
        );
      }
    );

  // Рендер постійно
  // axios.get(getUrl()).then((response) => {
  //   setData(response.data);
  // });

  return (
    <div className="content-view">
      <Header />
      <main className="content pv-24">
        <div className="wrapper flex flex-col gap-40 w-full">
          <SearchBar
            inputValue={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="flex gap-12 flex-wrap">{foo}</div>
        </div>
      </main>
    </div>
  );
};
