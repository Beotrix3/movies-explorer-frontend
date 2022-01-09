import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Menu from "../Menu/Menu";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {

const [isMenuOpen, setMenuOpen] = useState(false)
const handleMenu = () => {
  isMenuOpen ? setMenuOpen(false) : setMenuOpen(true)
}

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route path="/movies">
          <Header handleMenu={handleMenu} />
          <Movies />
          <Footer />
          <Menu isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
        </Route>

        <Route path="/saved-movies">
          <Header handleMenu={handleMenu} />
          <SavedMovies />
          <Footer />
          <Menu isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
        </Route>

        <Route path="/profile">
          <Header handleMenu={handleMenu} />
          <Profile />
          <Footer />
          <Menu isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
