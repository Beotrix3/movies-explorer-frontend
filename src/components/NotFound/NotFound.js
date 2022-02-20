import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const history = useHistory();

  function handleClickLink() {
    history.goBack();
  }

  return (
    <section className="notfound">
      <div>
        <h1 className="notfound__title">404</h1>
        <p className="notfound__subtitle">Страница не найдена</p>
      </div>
      <Link className="notfound__link" type="button" to="/" onClick={handleClickLink}>Назад</Link>
    </section>
  );
}

export default NotFound;
