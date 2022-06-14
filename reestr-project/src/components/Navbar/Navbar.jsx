import React from "react";
import "./Navbar.css";
// import { BrowserRouter as Link } from "react-router-dom";

import SearchIcon from "../../images/search.png"
import Reestr from "../../images/reestr.png"
import Calendar from "../../images/calendar.png"
import Notification from "../../images/notification.png"
import User from "../../images/user.png"



const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="container">
        <div className="Nav_logo">
          <img src={Reestr} alt="reestr" />
          <form className="Form">
            <img className="search" src={SearchIcon} alt="search" />
            <input
              className="Input"
              type="text"
              name="text"
              placeholder="Поиск"
              required
            />
          </form>
        </div>
        <div className="nav_icons ">
          <img className="calendar" src={Calendar} alt="calendar" />
          <img src={Notification} alt="notification" className="notification" />
          <span className="span"></span>
          <form className="forms">
            <img src={User} alt="User" className="user" />
            <label htmlFor="Захар Палазник" className="label">
              <select name="names" className="select">
                <option value="Захар Палазник">Захар Палазник</option>
                <option value="Elnur Ruzmanov">Elnur Ruzmanov</option>
                <option value="Захар Палазник">Захар Палазник</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
