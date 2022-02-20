import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ isFilterMovies, changeFilter }) {
  function handleChangeFilter() {
    changeFilter();
  }

  return (
    <div className="filter-checkbox__toggle-container">
      <button type="button" className={isFilterMovies ? "filter-checkbox__toggle": ''} onClick={handleChangeFilter}></button>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  )
};

export default FilterCheckbox;