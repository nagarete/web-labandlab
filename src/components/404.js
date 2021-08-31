import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/notfound.css";

const NotFound = () => {
  return (
    <section className="error-page">
      <img src={logo} alt="labandlab logo" className="big-logo" />
      <div className="error-text">404</div>
      <Link className="return-btn" to="/">
        Home
      </Link>
    </section>
  );
};

export default NotFound;
