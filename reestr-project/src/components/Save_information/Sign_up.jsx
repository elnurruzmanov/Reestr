import React from "react"
import "./Sign_up.css"
import Person from "../../images/Person.png"
import Notificat from "../../images/Uvedomlenie.png"
import Reestr from "../../images/Zahar2.png"
import Meta from "../../images/Meta.png"
import Security from "../../images/Bezopasnost.png"
import Download from "../../images/Zagruzka.png"
import Exit from "../../images/Exit2.png"
import Zaharr from "../../images/Zaharr.png"

const Sign_up=()=>{
    return (
      <div className="Sign_up">
        <div className="container">
          <h1>Личный кабинет</h1>
          <div className="Sign_up-info">
            <div className="Sign_up-title">
              <ul className="Sign_up-list">
                <li className="Sign_up-item">
                  <img src={Person} alt="Person" />
                  <a href="./Header" className="Person-link">
                    Мои данные
                  </a>
                </li>
                <li className="Sign_up-item">
                  <img src={Notificat} alt="Person" />
                  <a href="./Header" className="Person-link links">
                    Уведомления
                  </a>
                </li>
                <li className="Sign_up-item">
                  <img src={Reestr} alt="Person" />
                  <a href="./Header" className="Person-link links">
                    Реестры
                  </a>
                </li>
                <li className="Sign_up-item">
                  <img src={Meta} alt="Person" />
                  <a href="./Header" className="Person-link links">
                    Метаданные
                  </a>
                </li>
                <li className="Sign_up-item">
                  <img src={Security} alt="Person" />
                  <a href="./Header" className="Person-link links">
                    Безопасность
                  </a>
                </li>
                <li className="Sign_up-item">
                  <img src={Download} alt="Person" />
                  <a href="./Header" className="Person-link links">
                    Мои загрузки
                  </a>
                </li>
                <li className="Sign_up-item">
                  <img src={Exit} alt="Person" />
                  <a href="./Header" className="Person-link links2">
                    Выход
                  </a>
                </li>
              </ul>
            </div>
            <div className="Sign_up-register">
              <div className="Sign_up-name">
                <img src={Zaharr} alt="Zahar" />
                <h1>Здравствуй, Захар!</h1>
              </div>
              <h3 className="name2">Основные данные</h3>
              <div className="form1_info">
                <form>
                  <label htmlFor="Имя">
                    <p>Имя</p>
                    <input
                      type="text"
                      placeholder="name..."
                      required
                      className="input"
                    />
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Sign_up