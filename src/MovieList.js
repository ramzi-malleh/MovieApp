import React from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
const MovieList = ({movies,Delete,addMovie=()=>{}}) => (
  <div className="movie-list">
    {movies.map(el => (
      <MovieCard key={el.id} movie={el} Delete={()=>Delete(el.id)} />
    ))}
    <AddMovie addMovie={(newMovie)=>{addMovie(newMovie)}} />
  </div>
);

export default MovieList;
