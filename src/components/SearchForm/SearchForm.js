import React from "react";
import "./SearchForm.css";
import { loadJSON, saveJSON } from "../../utils/functions.js";

function SearchForm({ isSaved, searchMovies, searchSavedMovies }) {
  const [validForm, setValidForm] = React.useState(true);
  const [textInput, setTextInput] = React.useState(loadJSON('searchQueryYa') || '');

  function handleChangeInput(e) {
    setTextInput(e.target.value);
    setValidForm(e.target.checkValidity());
  }

  function handleSearchMovies(e) {
    e.preventDefault();
    searchMovies(textInput);
    saveJSON("searchQueryYa", textInput);
  }

  function handleSearchSavedMovies(e) {
    e.preventDefault();
    searchSavedMovies(textInput);
  }

  return (
    <>
      <form className="search-form" onSubmit={isSaved ? handleSearchSavedMovies : handleSearchMovies}>
        <input className="search-form__input" onChange={handleChangeInput} value={textInput} type="text" placeholder="Фильм" required minLength="2" />
        <div className="search-form__right">
          <button className="search-form__button" disabled={!validForm} type="submit"></button>
        </div>
      </form>
      <span className="search-form__error">{validForm ? "" : "Нужно ввести ключевое слово"}</span>
    </>
  )
};

export default SearchForm;