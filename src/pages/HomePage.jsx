import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { getUrl } from "../utils";
import { MovieCard, SearchBar } from "../components/interface";
import { Header } from "../components/layout";
// import { generatePath } from "react-router-dom";

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // const [page, setPage] = useState(1);

  const getMovieData = useCallback(() => {
    axios.get(getUrl("/movie/popular")).then((response) => {
      setData(response.data.results);
    });
  }, []);

  // Рендер один раз
  useEffect(() => {
    getMovieData();
  }, [getMovieData]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value) {
      axios
        .get(getUrl("/search/movie"), { params: { query: value } })
        .then((response) => {
          setData(response.data.results);
        });
    } else {
      getMovieData();
    }
  };

  const movieDetails = data
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
          <SearchBar inputValue={searchValue} onChange={handleInputChange} />
          <div className="flex gap-12 flex-wrap">{movieDetails}</div>
        </div>
      </main>
    </div>
  );
};
