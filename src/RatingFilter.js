import React from "react";
import Rating from "./Rating";

const RatingFilter = ({ onChange, count }) => (
  <div className="rating-filter">
    <span className="rating-filter-text">Rate :</span>
    <Rating
      count={count}
      onChangeRating={newRate => {
        onChange(newRate);
      }}
    />
  </div>
);

export default RatingFilter;
