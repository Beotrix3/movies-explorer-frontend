import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ isSaved, isFilterMovies, isFilterSavedMovies, changeFilter, changeFilterSavedMovies }) {

  function handleChangeFilter() {
    changeFilter();
  }

  function handleChangeSavedFilter() {
    changeFilter();
  }

  return (
    <section className="filter-checkbox">
      {isSaved ?
      <button onClick={handleChangeFilter} type="button" className={isFilterSavedMovies ? "filter-checkbox__button filter-checkbox__button_active" : "filter-checkbox__button filter-checkbox__button_inactive"}></button>
      :
      <button onClick={handleChangeSavedFilter} type="button" className={isFilterMovies ? "filter-checkbox__button filter-checkbox__button_active" : "filter-checkbox__button filter-checkbox__button_inactive"}></button>
      }
      <p className="filter-checkbox__text">Короткометражки</p>
    </section>
  )

};

export default FilterCheckbox;