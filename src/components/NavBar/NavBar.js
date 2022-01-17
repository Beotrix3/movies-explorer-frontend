import "./NavBar.css"
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <Link className="navbar__signup-link" to="/signup">Регистрация</Link>
      <Link className="navbar__signin-link" to="/signin">Войти</Link>
    </nav>
  );
}

export default NavBar;