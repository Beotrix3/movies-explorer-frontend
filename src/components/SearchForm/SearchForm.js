import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__search-container">
        <form className="search-form__form">
          <input className="search-form__input" placeholder="Фильм" required />
          <button type="submit" className="search-form__button"></button>
        </form>
        <div className="search-form__toggle-container">
          <input type="checkbox" className="search-from__toggle" />
          <p className="search-form__toggle-text">Короткометражки</p>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;