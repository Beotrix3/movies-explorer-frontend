import "./Account.css"
import { Link } from "react-router-dom"

function Account({ handleMenu }) {
  return (
    <Link onClick={handleMenu} to="/profile" className="account">
      <p className="account__text">Аккаунт</p>
      <div className="account__image"></div>
    </Link>
  );
}

export default Account