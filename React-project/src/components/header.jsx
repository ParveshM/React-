import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Just-Eat-Logo.png";

const Title = (
  <Link to={"/"}>
    <img className="logo" src={logo} alt="Just Eat Logo" />
  </Link>
);

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div
      className="header"
      style={{
        backgroundColor: "lightBlue",
      }}
    >
      {Title}
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home </Link>
          </li>

          <Link to={"/about"}>
            <li>About</li>
          </Link>

          <li>
            <Link to={"/contact"}>contact </Link>
          </li>

          <li>Cart</li>
          <li>
            {isLogged ? (
              <button
                onClick={() => {
                  setIsLogged(false);
                }}
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsLogged(true);
                }}
              >
                LogOut
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
