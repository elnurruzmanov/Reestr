import React from "react"
import "./Footer.css"


import Reestr from "../../images/reestr.png"


const Footer =()=>{
    return (
      <div className="Footer">
        <div className="container">
          <div className="Footer_lists">
            <ul className="Footer_list">
              <li className="Footer_item item1">
                <img className="Footer_reestr" src={Reestr} alt="Reestr" />
                <p className="reestr_text">
                  Открытое акционерное общество «Реестр ПО» начало практическую
                  деятельность с 1 марта 2014 г
                </p>
                <div className="Footer_developer">
                  <h4>Разработчик</h4>
                  <h5>ОАО «Агентство сервисизации и реинжиниринга»</h5>
                  <a
                    href="https://yandex.by/maps/157/minsk/geo/31326030/?ll=27.537432%2C53.899567&z=15"
                    className="location_link"
                  >
                    Минск, улица Клары Цеткин, 24
                  </a>
                </div>
              </li>

              <li className="Footer_item item2">
                <h2 className="Footer_information">Информация </h2>
                <a
                  href="https://yandex.by/maps/157/minsk/geo/31326030/?ll=27.537432%2C53.899567&z=15"
                  className="location_link links_2"
                >
                  Реестры
                </a>
                <a href="#" className="footer_news">
                  Новости
                </a>
                <a href="#" className="footer_news">
                  Документы
                </a>
                <a href="#" className="footer_news">
                  Вопросы
                </a>
              </li>
              <li className="Footer_item item3">
                <h2 className="Footer_information">Информация </h2>
                <p className="Footer-text text2">
                  Ежедневно с 8.00 до 19.00, за исключением выходных (суббота,
                  воскресенье) и праздничных дней.
                </p>
                <a href="#" className="footer_news">
                  +375 25 111 22 33
                </a>
                <a href="#" className="footer_news">
                  +375 29 222 44 55
                </a>
                <a href="#" className="footer_news">
                  ReestrPOsupport@mail.ru
                </a>
              </li>
              <li className="Footer_item item4">
                <h2 className="Footer_information">Контакты </h2>

                <a href="#" className="footer_news">
                  +375 33 112 22 45
                </a>
                <a href="#" className="footer_news">
                  +375 29 222 44 88
                </a>
                <a href="#" className="footer_news">
                  ReestrPO@mail.ru
                </a>
                <a
                  href="https://yandex.by/maps/157/minsk/geo/31326030/?ll=27.537432%2C53.899567&z=15"
                  className="location_link location_link2"
                >
                  22004 г. Минск, улица Клары Цеткин, 24
                </a>
                <a href="#" className="footer_news contact_support">
                  Связаться с поддержкой
                </a>
              </li>
            </ul>
          </div>
          <hr className="hr" />
          <p className="diynamic_text">
            Copyright &copy; 2022-
            <script>document.write(new Date().getFullYear())</script>
            ОАО «РеестрПО». Все права защищены.
          </p>
        </div>
      </div>
    );
    
}

export  default Footer