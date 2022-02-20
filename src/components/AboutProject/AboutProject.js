import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__container">
        <div className="about-project__step">
          <p className="about-project__step-title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__step-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__step">
          <p className="about-project__step-title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__step-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__duraction">
        <div className="about-project__backend">
          <div className="about-project__duraction-backend">1 неделя</div>
          <p className="about-project__duraction-text">Back-end</p>
        </div>
        <div className="about-project__frontend">
          <div className="about-project__duraction-frontend">4 недели</div>
          <p className="about-project__duraction-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
