import React from "react";
// import axios from "axios";

import { Poster, Title, Genres } from ".";

export const MovieCard = ({ onClick }) => {
  // const options = {
  //   method: "GET",
  //   url: "https://online-movie-database.p.rapidapi.com/auto-complete",
  //   params: { q: "game of thr" },
  //   headers: {
  //     "X-RapidAPI-Key": "e5c3be81edmshf5803884f66f7dep151187jsn3d1bc0519b6a",
  //     "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  //   },
  // };

  // const [data, setData] = useState({});

  // // const {
  // //   d: [
  // //     {
  // //       i: { imageUrl },
  // //       id,
  // //       l,
  // //       // s,
  // //     },
  // //   ],
  // // } = data;

  // data.d.map(({ i: { imageUrl }, id, l }) => {

  // });

  // const movieName = d.map((item) => {
  //   return item.l;
  // });

  // const poster = d.map((item) => {
  //   return item.i.imageUrl;
  // });

  // axios
  //   .request(options)
  //   .then((response) => {
  //     setData(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  return (
    <article onClick={onClick} className="movie-card flex flex-col">
      <Poster />
      <header className="movie-card__info flex flex-col flex-1 gap-8">
        <Title />
        <Genres />
      </header>
    </article>
  );
};
