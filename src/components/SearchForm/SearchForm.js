import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ isSaved, searchMovies, searchSavedMovies }) {
  const [validForm, setValidForm] = React.useState(true);
  const [textInput, setTextInput] = React.useState("");

  function handleChangeInput(e) {
    setTextInput(e.target.value);
    setValidForm(e.target.checkValidity());
  }

  function handleSearchMovies(e) {
    e.preventDefault();
    searchMovies(textInput);
    setTextInput("");
  }
  
  function handleSearchSavedMovies(e) {
    e.preventDefault();
    searchSavedMovies(textInput);
    setTextInput("");
  }

  return (
    <section className="search-form" onSubmit={isSaved ? handleSearchSavedMovies : handleSearchMovies}>
      <div className="search-form__search-container">
        <form className="search-form__form">
          <input className="search-form__input" onChange={handleChangeInput} value={textInput} type="text" placeholder="Фильм" required minLength="2" />
          <span className="search-form__error">{validForm ? "" : "Нужно ввести ключевое слово"}</span>
          <button className="search-form__button" disabled={!validForm} type="submit" />
        </form>
      <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
