import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__search-container">
        <div className="search-form__wrapper">
          <form className="search-form__form">
            <div className="search-form__image"></div>
            <input className="search-form__input" placeholder="Фильм" required />
            <button type="submit" className="search-form__button">
              <div className="search-form__image-white"></div>
            </button>
          </form>
          <div className="search-form__toggle-container">
            <input type="checkbox" className="search-from__toggle" />
            <p>Короткометражки</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;