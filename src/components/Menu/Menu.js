import React from 'react';
import { NavLink } from 'react-router-dom';
import Account from '../Account/Account';
import './Menu.css';

function Menu({ isMenuOpen, handleMenu }) {
  return (
    <section className={isMenuOpen ? 'menu' : 'menu_hidden'}>
      <div className="menu__paragraph">
        <div className="menu__paragraph-wrapper">
          <button type="button" onClick={handleMenu} className="menu__exit-button" />
          <nav className="menu__nav">
            <NavLink className="menu__link" onClick={handleMenu} to="/" href="#">Главная</NavLink>
            <NavLink className="menu__link" activeClassName="menu__link_active" onClick={handleMenu} to="/movies" href="#">Фильмы</NavLink>
            <NavLink className="menu__link" activeClassName="menu__link_active" onClick={handleMenu} to="/saved-movies" href="#">Сохранённые фильмы</NavLink>
          </nav>
        </div>
        <Account handleMenu={handleMenu} />
      </div>
    </section>
  );
}

export default Menu;
