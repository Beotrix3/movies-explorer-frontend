import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-container">
          <a className="portfolio__link" href="https://github.com/Beotrix3/how-to-learn" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text">Статичный сайт</p>
            <p className="portfolio__link-image">↗</p>
          </a>
        </li>
        <li className="portfolio__link-container">
          <a className="portfolio__link" href="https://github.com/Beotrix3/russian-travel" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <p className="portfolio__link-image">↗</p>
          </a>
        </li>
        <li className="portfolio__link-container">
          <a className="portfolio__link" href="https://github.com/Beotrix3/react-mesto-api-full" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <p className="portfolio__link-image">↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
