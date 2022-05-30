import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about" id="about">
      <h3 className="about__subtitle">Студент</h3>
      <div className="about__content">
        <div>
          <h4 className="about__content_name">Алексей</h4>
          <p className="about__content_profession">Фронтенд-разработчик, 20 лет</p>
          <p className="about__content_description">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
            экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
            слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
            С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
            После того, как прошёл курс по&nbsp;веб-разработке, начал
            заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <div className="about__content_socials">
            <a className="about__content_social" href="https://www.facebook.com/profile.php?id=100071818400348" target="_blank" rel="noreferrer">Facebook</a>
            <a className="about__content_social" href="https://github.com/Beotrix3" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
        <div className="about__content_photo"></div>
      </div>
    </section>
  )
};

export default AboutMe;