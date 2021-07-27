import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo-container">
            <Link to="/">
              <img src={logo} alt="labandlab logo" className="logo" />
            </Link>
          </li>
          <li className="navlinks-container">
            <a
              href="https://tokopedia.com/labandlab"
              target="_blank"
              rel="noreferrer"
              className="navlinks"
            >
              tokopedia
            </a>
          </li>
          <li className="navlinks-container">
            <a
              href="https://shopee.co.id/labandlab.official"
              target="_blank"
              rel="noreferrer"
              className="navlinks"
            >
              shopee
            </a>
          </li>
          <li className="navlinks-container">
            <a
              href="https://wa.me/message/ZFRIBKZHOVWJN1"
              target="_blank"
              rel="noreferrer"
              className="navlinks"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
