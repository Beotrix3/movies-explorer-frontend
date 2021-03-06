import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ moviesCollection, isSaved, isLoadingMovies, savedMovies, movieDeleteFromSavedMovies, movieSaveInStore, foundError, serverError }) {
  return (
    <section className="movies-card-list">
      <Preloader isLoadingMovies={isLoadingMovies} />
      <span className="search-form__error">{foundError ? "Ничего не найдено" : ""}</span>
      <span className="server__error">{serverError ? "Такая карточка отсутствует" : ""}</span>
      <ul className="movies__collection">
        {moviesCollection.map((movies) => {
          return (<MoviesCard key={isSaved ? movies.movieId : movies.id} movies={movies} isSaved={isSaved} savedMovies={savedMovies} movieDeleteFromSavedMovies={movieDeleteFromSavedMovies} movieSaveInStore={movieSaveInStore} />)
        })}
        {console.log(moviesCollection)}
      </ul>
    </section>
  )
};

export default MoviesCardList;