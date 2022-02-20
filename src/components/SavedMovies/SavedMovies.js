import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies({ moviesCollection, searchMovies, searchSavedMovies, isLoadingMovies, savedMovies, movieDeleteFromSavedMovies, movieSaveInStore, foundError, serverError }) {

  return (
    <main className="saved-movies">
      <SearchForm isSaved={true} searchMovies={searchMovies} searchSavedMovies={searchSavedMovies} />
      <MoviesCardList moviesCollection={moviesCollection} isSaved={true} isLoadingMovies={isLoadingMovies} savedMovies={savedMovies} movieDeleteFromSavedMovies={movieDeleteFromSavedMovies} movieSaveInStore={movieSaveInStore} foundError={false} serverError={serverError} />
    </main>
  );
}

export default SavedMovies;
