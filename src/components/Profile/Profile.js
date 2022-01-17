import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <form className="profile__form">
        <h1 className="profile__title">Привет, Алексей!</h1>
        <section className="profile__section">
          <label className="profile__label" htmlFor="profile__name">Имя</label>
          <input className="profile__input" id="profile__name" name="profile__name" type="text" placeholder="имя" minLength="2"/>
        </section>
        <section className="profile__section">
          <label className="profile__label" htmlFor="profile__email">E&#8209;mail</label>
          <input className="profile__input" id="profile__email" name="profile__email" type="email" placeholder="email"/>
        </section>
        <button className="profile__button profile__edit-button" type="submit">Редактировать</button>
        <button className="profile__button profile__exit-button" type="button">Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;