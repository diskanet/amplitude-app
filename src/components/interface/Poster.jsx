import React from "react";

import { RatingBadge } from "./RatingBadge";
import { BookmarkButton } from "./BookmarkButton";

// import ukraine from "../../assets/img/ukraine.jpeg";

export const Poster = () => {
  return (
    <div className="card-poster-container flex">
      <img src="" alt="" className="poster-img" />
      <div className="hover-row flex justify-between w-full">
        <RatingBadge />
        <BookmarkButton />
      </div>
    </div>
  );
};
