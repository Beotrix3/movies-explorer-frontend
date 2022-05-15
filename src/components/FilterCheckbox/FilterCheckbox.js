import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ isFilterMovies, changeFilterMovies }) {
  function handleChangeFilter() {
    changeFilterMovies();
  }

  return (
    <section className="filter-checkbox">
      <button onClick={handleChangeFilter} type="button" className={isFilterMovies ? "filter-checkbox__button filter-checkbox__button_active" : "filter-checkbox__button filter-checkbox__button_inactive"}></button>
      <p className="filter-checkbox__text">Короткометражки</p>
    </section>
  )

};

export default FilterCheckbox;