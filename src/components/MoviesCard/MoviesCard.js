import "./MoviesCard.css";

function MoviesCard() {
  return (
    <li className="movie-card">
      <div className="movie-card__content">
        <div className="movie-card__text-container">
          <h2 className="movie-card__title">Омерзительная восьмерка</h2>
          <p className="movie-card__subtitle">1ч 42м</p>
        </div>
        <div>
          <button className="image movie-card__like"></button>
          <button className="image movie-card__liked"></button>
          <button className="image movie-card__delete"></button>
        </div>
      </div>
      <img className="movie-card__image" alt="Фрагмент из фильма" src="https://images.unsplash.com/photo-1561099272-4b76713adc0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
    </li>
  );
}

export default MoviesCard;