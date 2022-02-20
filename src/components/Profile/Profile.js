import React from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Profile.css';

function Profile({ isLogged, onSignOut, changeProfile, profileError, setProfileError }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation();

  function editUserProfile(e) {
    e.preventDefault();
    changeProfile({ email: values.email, name: values.name });
    resetForm();
  }

  function handleClickSignOut() {
    resetForm();
    onSignOut();
  }

  function handleChangeInput(e) {
    handleChange(e);
    if (profileError.length > 0) {
      setProfileError("");
    }
  }

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  return (
    <section className="profile">
      <form className="profile__form">
        <h1 className="profile__title">Привет, {currentUser.name}</h1>
        <div onSubmit={editUserProfile}>
          <section className="profile__section">
            <label className="profile__label">Имя</label>
            <input className="profile__input" name="name" value={values.name || ""} pattern="[а-яА-Яa-zA-ZёË\- ]{1,}" type="text" onChange={handleChangeInput} minLength="2" required />
            <span className="profile__form-error">{errors.name}</span>
          </section>
          <section className="profile__section">
            <label className="profile__label">E&#8209;mail</label>
            <input className="profile__input" name="email" value={values.email || ""} onChange={handleChangeInput} type="email" required />
            <span className="profile__form-error">{errors.email}</span>
          </section>
        </div>
        <span className="profile__form-error">{profileError}</span>
        <button className={isValid ? "profile__button" : "profile__button profile__edit-button"} disabled={!isValid} type="submit">Редактировать</button>
        <button className="profile__button profile__exit-button" type="button" onClick={handleClickSignOut}>Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;
