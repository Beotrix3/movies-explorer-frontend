import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Register.css';

function Register({ onRegister, clearErrors, registerError, setRegisterError }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleRegister(e) {
        e.preventDefault();
        onRegister({ email: values.email, name: values.name, password: values.password });
        resetForm();
    }

    function handleClearErrors() {
        resetForm();
        clearErrors();
    }

    function handleChangeInput(e) {
      handleChange(e);
      if (registerError.length > 0) {
        setRegisterError("");
      }
    }

  return (
    <section className="register">
      <Logo />
      <form className="register__form">
        <div onSubmit={handleRegister}>
          <h1 className="register__title">Добро пожаловать!</h1>
          <label className="register__label">Имя
            <input className="register__input" type="text" name="name" value={values.name || ""} onChange={handleChangeInput} pattern="[а-яА-Яa-zA-ZёË\- ]{1,}" required minLength="2" />
            <span className="register__error">{errors.name}</span>
          </label>
          <label className="register__label">E-mail
            <input className="register__input" name="email" type="email" value={values.email || ""} onChange={handleChangeInput} required />
            <span className="register__error">{errors.email}</span>
          </label>
          <label className="register__label">Пароль
            <input className="register__input" type="password" name="password" value={values.password || ""} onChange={handleChangeInput} required minLength="8" />
            <span className="register__error">{errors.password}</span>
          </label>
          <span className="register__error">{registerError}</span>
          <button className={isValid ? "register__button register__button_invalid" : "register__button"} type="submit" disabled={!isValid}>Зарегистрироваться</button>
          <span className="register__text">Уже зарегистрированы?
            <Link className="register__link" to="/signin" onClick={handleClearErrors}>Войти</Link>
          </span>
        </div>
      </form>
    </section>
  );
}

export default Register;
