import React from "react";
import Rating from "./Rating";
const MovieCard = ({movie={},Delete}) => {
  const {
    title = "",
    year = "",
    image = "https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png",
    rating = 0
  } = movie;
  return (
    <div className="movie-card">
      <div onClick={() => Delete()} className="delete-movie">
        X
      </div>
      <div className="movie-rating">
        <Rating count={rating} />
      </div>
      <div
        className="movie-image"
        style={{
          backgroundImage: `url('${image}')`
        }}
      />
      <div className="movie-description">
        {title} - {year}
      </div>
    </div>
  );
};

export default MovieCard;
