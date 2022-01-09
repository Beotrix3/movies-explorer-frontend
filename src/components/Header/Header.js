import "./Header.css";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import Navigation from "../Navigation/Navigation";
import Account from "../Account/Account";
import { useRouteMatch } from "react-router-dom";

function Header({ handleMenu }) {
  const matchMain = useRouteMatch("/");

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        {matchMain.isExact ? (
          <NavBar />
        ) : (
          <>
            <Navigation />
            <div className="header__link-wrapper">
              <Account />
            </div>
            <button className="header__menu-button" onClick={ handleMenu }></button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;