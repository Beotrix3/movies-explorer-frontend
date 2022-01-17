import "./Login.css";
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

function Login() {
  return (
    <section className="login">
      <Logo />
      <form className="login__form">
        <h1 className="login__title">Рады видеть!</h1>
        <label className="login__label" htmlFor="login-email">E-mail</label>
        <input className="login__input" id="login-email" name="login-email" type="email" required />
        <label className="login__label" htmlFor="login-password">Пароль</label>
        <input className="login__input" minLength="8" id="login-password" name="login-password" type="password" required />
        <span className="login__error-text">Что-то пошло не так...</span>
        <button className="login__button" type="submit">Войти</button>
        <span className="login__text">Еще не зарегистрированы?
          <Link to="/signup" className="login__link">Регистрация</Link>
        </span>
      </form>
    </section>
  );
}

export default Login;