import "./Menu.css";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <a className="social" href="https://twitter.com/Vict0r_dev"> <BsTwitter color="#293C66" size={35}/></a>
      <a className="social" href="https://github.com/DevzVictor"> <BsGithub color="#293C66" size={35}/></a>
      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  );
}

export default Menu;
