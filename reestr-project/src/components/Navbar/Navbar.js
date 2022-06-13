import React from "react";
import "./Navbar.css";
// import { BrowserRouter as Link } from "react-router-dom";

import SearchIcon from "../../images/search.png"
import Reestr from "../../images/reestr.png"


const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="Nav_logo">
          <img src={Reestr} alt="reestr" />
          <form className="Form">
            <img src={SearchIcon} alt="search" />
            <input
              className="Input"
              type="text"
              name="text"
              placeholder="Поиск"
              required
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
