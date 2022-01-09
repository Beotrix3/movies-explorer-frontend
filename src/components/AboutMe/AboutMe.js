import "./AboutMe.css";
import photo from "../../images/photo.jpg";


function AboutMe() {
  return (
    <section className="about">
      <h2 className="about__title">Студент</h2>
      <div className="about__info-container">
        <div>
          <div className="about__bio-container">
            <h3 className="about__name">Алексей</h3>
            <p className="about__position">Фронтенд-разработчик, 19 лет</p>
            <p className="about__bio">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
              экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
              слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
              С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс по&nbsp;веб-разработке, начал
              заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
          </div>
          <div>
            <a className="about__link" href="https://www.facebook.com/profile.php?id=100071818400348" target="_blank" rel="noreferrer">Facebook</a>
            <a className="about__link" href="https://github.com/Beotrix3" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
        <img className="about__photo" src={photo} alt="Фото" />
      </div>
    </section>
  );
}

export default AboutMe;