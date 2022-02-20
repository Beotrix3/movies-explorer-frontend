import React from 'react';
import MovieCard from '../MoviesCard/MoviesCard';
import Preloader from "../Preloader/Preloader";
import './MoviesCardList.css';

function MoviesCardList({ moviesCollection, isSaved, isLoadingMovies, savedMovies, movieDeleteFromSavedMovies, movieSaveInStore, foundError, serverError }) {
  return (
    <section className="movies-list">
      <Preloader isLoadingMovies={isLoadingMovies} />
      <span className="search-form__error">{foundError ? "Ничего не найдено" : ""}</span>
      <span className="server__error">{serverError ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" : ""}</span>
      <ul className="movies-list__cards">
        {moviesCollection.map((movies) => {
          return (<MovieCard key={isSaved ? movies.movieId : movies.id} movies={movies} isSaved={isSaved} savedMovies={savedMovies} movieDeleteFromSavedMovies={movieDeleteFromSavedMovies} movieSaveInStore={movieSaveInStore} />)
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
