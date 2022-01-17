import "./Promo.css";
import { NavTab } from '../NavTab/NavTab';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__inner">
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
      </div>
      <NavTab />
    </section>
  );
}

export default Promo;