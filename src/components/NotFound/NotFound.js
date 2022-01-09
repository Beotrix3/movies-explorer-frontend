import "./NotFound.css";
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <section className="notfound">
      <div>
        <h1 className="notfound__title">404</h1>
        <p className="notfound__subtitle">Страница не найдена</p>
      </div>
      <Link className="notfound__link" to="/">Назад</Link>
    </section>
  );
}

export default NotFound;