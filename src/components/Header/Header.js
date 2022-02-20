import './Header.css';
import { useRouteMatch } from 'react-router-dom';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';

function Header() {
  const matchMain = useRouteMatch('/');

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__links">
          <Logo />
          {matchMain.isExact ? (
            <></>
          ) : (
            <Navigation />
          )}
        </div>
        {matchMain.isExact ? (
          <NavBar />
        ) : (
          <>
            <div className="header__link-wrapper">
              <Account />
            </div>
            <button type="button" className="header__menu-button" />
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
