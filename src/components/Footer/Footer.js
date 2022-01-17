import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__about">
        <p className="footer__about-text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__link-field">
        <p className="footer__copyright">© 2022</p>
        <ul className="footer__link-container">
          <li>
            <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/Beotrix3" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li>
            <a className="footer__link" href="https://www.facebook.com/profile.php?id=100071818400348" target="_blank" rel="noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;