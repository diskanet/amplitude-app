import React, { useCallback, useEffect, useState } from "react";

import { axios } from "@services";

import { SearchBar } from "@components/interface";
import { Header, MovieCard } from "@components/layout";

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieData = useCallback(() => {
    axios.get("/movie/popular").then((response) => {
      setData(response.data.results);
    });
  }, []);

  useEffect(() => {
    getMovieData();
  }, [getMovieData]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);

    if (value) {
      axios
        .get("/search/movie", { params: { query: value } })
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
      }) => {
        return (
          <MovieCard
            key={id}
            id={id}
            poster={`https://image.tmdb.org/t/p/w500${posterImage}`}
            rating={rating}
            movieTitle={movieTitle}
          />
        );
      }
    );

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
