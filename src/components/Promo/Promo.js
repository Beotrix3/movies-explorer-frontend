import "./Promo.css";
import image from "../../images/landing-logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__description">
          <div className="promo__text-container">
            <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </div>
          <a className="promo__link" href="#about-project">Узнать больше</a>
        </div>
        <img className="promo__image" src={image} alt="Логотип Web" />
      </div>
    </section>
  );
}

export default Promo;