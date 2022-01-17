import "./Register.css";
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

function Register() {
  return (
    <section className="register">
      <Logo />
      <form className="register__form">
        <h1 className="register__title">Добро пожаловать!</h1>
        <label className="register__label" htmlFor="register-name">Имя</label>
        <input className="register__input" id="register-name" name="register-name" type="text" minLength="2" required />
        <label className="register__label" htmlFor="register-email">E-mail</label>
        <input className="register__input" id="register-email" name="register-email" type="email" required />
        <label className="register__label" htmlFor="register-password">Пароль</label>
        <input className="register__input" id="register-password" name="register-password" type="password" minLength="8" required/>
        <span className="register__error-text">Что-то пошло не так...</span>
        <button className="register__button" type="submit">Зарегистрироваться</button>
        <span className="register__text">Уже зарегистрированы?
          <Link className="register__link" to="/signin">Войти</Link>
        </span>
      </form>
    </section>
  );
}

export default Register;