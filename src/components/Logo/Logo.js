import "./Logo.css"
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom"

function Logo() {
  return (
    <Link className="logo" to="/"><img src={logo} alt="Логотип S" /></Link>
  )
}

export default Logo