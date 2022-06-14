import React from "react";
import  "./Header.css"


import Header_search from "../../images/search.png";
import Office_work from "../../images/office-work.png";


const Header =()=>{
    return (
      <>
        <header className="Header">
          <div className="container">
            <div className="Header_info">
              <h1 className="Header_title">РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
              <p className="Header_text">
                Единый реестр программ для электронных вычислительных машин и
                баз данных
                <div className="database">
                  Включено ПО в реестр:
                  <span className="header_span">13 438</span> Правообладателей:
                  <span className="header_span">42 72</span>
                </div>
              </p>
              <form className="Header_form">
                <img src={Header_search} alt="Header_search" />
                <input className="Header_input"
                autoComplete="off"
                  type="text"
                  name="text"
                  placeholder="Искать реестр..."
                  required
                />
                <button className="Header_btn">Искать</button>
              </form>
            </div>
            <div className="Header_image">
              <img src={Office_work} alt="Office-work" />
            </div>
          </div>
        </header>
      </>
    );
}

export default Header
