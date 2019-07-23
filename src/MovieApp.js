import React, { Component } from "react";
import "./App.css";
import NameFilter from "./NameFilter";
import RatingFilter from "./RatingFilter";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

const spiderMan = {
  id: "spider",
  title: "Spider-Man: Far From Home",
  rating: 5,
  image:
    "https://img1.looper.com/img/uploads/2019/05/Spider-Man-Far-From-Home.jpg",
  year: 2019
};
const tombraider = {
  id: "tomb",
  title: "Tomb Raider",
  year: 2018,
  rating: 3,
  image: "http://fr.web.img6.acsta.net/pictures/18/02/23/10/50/3676882.jpg"
};
const equalizer = {
  id: "equalizer",
  title: "The Equalizer 2",
  year: 2018,
  rating: 4,
  image: "http://fr.web.img3.acsta.net/pictures/18/05/15/12/24/4187958.jpg"
};

const moviesToDisplay = [spiderMan, equalizer, tombraider];

class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minRatingFilter: 1,
      movies: moviesToDisplay,
      titleSearch: ""
    };
  }
  Delete = ({ key }) => {
    this.setState({
      movies: this.state.movies.filter(el => el.id !== key)
    });
  };
  addMovie = newMovie => {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    });
  };
  getMovies=()=> {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRatingFilter &&
        el.title.toUpperCase().includes(this.state.titleSearch.toUpperCase())
    );
  }
  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <NameFilter
            value={this.state.titleSearch}
            changeValue={newTitle => {
              this.setState({
                titleSearch: newTitle
              });
            }}
          />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={newRate => {
              this.setState({
                minRatingFilter: newRate
              });
            }}
          />
        </header>
        <main className="movie-app-main">
          <MovieList
            movies={this.getMovies()}
            Delete={key => this.Delete({ key })}
            addMovie={this.addMovie}
          />
        </main>
      </div>
    );
  }
}

export default MovieApp;
