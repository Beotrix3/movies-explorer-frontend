import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Login.css';

function Login({ onLogin, clearErrors, loginError, setLoginError }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleLogin(e) {
        e.preventDefault();
        onLogin({ email: values.email, password: values.password });
        resetForm();
    }

    function handleClearErrors() {
        resetForm();
        clearErrors();
    }

    function handleChangeInput(e) {
      handleChange(e);
      if (loginError.length > 0) {
        setLoginError("");
      }
    }

  return (
    <section className="login">
      <Logo />
      <form className="login__form">
        <div onSubmit={handleLogin}>
          <h1 className="login__title">Рады видеть!</h1>
          <label className="login__label">E-mail
            <input className="login__input" name="email" type="email" value={values.email || ""} onChange={handleChangeInput} required />
            <span className="login__error">{errors.email}</span>
          </label>
          <label className="login__label">Пароль
            <input className="login__input" type="password" name="password" value={values.password || ""} onChange={handleChangeInput} required minLength="8" />
            <span className="login__error">{errors.password}</span>
          </label>
          <span className="login__error">{loginError}</span>
          <button className={isValid ? "login__button login__button_invalid" : "login__button"} type="submit" disabled={!isValid}>Войти</button>
          <span className="login__text">Еще не зарегистрированы?
            <Link to="/signup" className="login__link" onClick={handleClearErrors}>Регистрация</Link>
          </span>
        </div>
      </form>
    </section>
  );
}

export default Login;
