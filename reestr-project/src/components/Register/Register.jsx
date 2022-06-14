import React from "react";
import "./Register.css";
import Register_number from "../../images/arrow-left-right.png";
import Filter from "../../images/filter.png";
import Dots from "../../images/dots.png";
import Arrow from "../../images/arrow.png";
import Vector from "../../images/vector.png";
import Vector2 from "../../images/vector.png";
import Arrow2 from "../../images/Arrow2.png";

const Register = () => {
  return (
    <div className="Register">
      <div className="container">
        <div className="Registers_titles">
          <div className="Registers_title">
            <h1>Реестры</h1>
          </div>
          <div className="Registers_filter">
            <img className="Filter_icon" src={Filter} alt="Filter" />
            <img src={Dots} alt="Dots" />
          </div>
        </div>

        <div className="Register_info">
          <hr className="hr" />
          <div className="Register_lists">
            <ul className="Register_list list1">
              <li className="register_item register_title">
                <img src={Register_number} alt="Register_number" />
                <p className="register_text">Регистрационный номер</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">#1</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">#2</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">#3</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">#4</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">#5</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">#6</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">#7</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">#8</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">#9</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">#10</p>
              </li>
            </ul>
            <ul className="Register_list list2">
              <li className="register_item register_title">
                <img src={Register_number} alt="Register_number" />
                <p className="register_text">
                  Наименование программного обеспечения
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  Система управления базами данных «Ред База Данных»
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  1С:Школа. Информатика, 11 класс
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  1С:Школа. Русский язык, 5–6 класс. Лексикология
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  1С:Комплексная автоматизация 8
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  Электронный периодический справочник "Система ГАРАНТ"
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  Система электронного документооборота и автоматизации
                  бизнес-процессов «Е1 Евфрат»
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">ABBYY Lingvo</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">1С-Битрикс24 (Компания)</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">1С-Битрикс24 (Проект+)</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">1С-Битрикс24 (Команда)</p>
              </li>
            </ul>
            <ul className="Register_list list3">
              <li className="register_item register_title">
                <p className="register_text">Код класса</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">02.09</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">04.11</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">04.11</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">04.11</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">04.15</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">04.13</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">04.07</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">04.03</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">04.03</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">04.03</p>
              </li>
            </ul>
            <ul className="Register_list list4">
              <li className="register_item register_title">
                <p className="register_text">Класс программного обеспечения</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  Системы управления базами данных
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  Системы организации
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  Информационные специфических задач
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  Системы организации
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  Прикладное  назначения
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  Системы сбора, массивов данных
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  Лингвистическое обеспечение
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">Офисные приложения</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  Системы управления проектами
                </p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">
                  Системы сбораи визуализации
                </p>
              </li>
            </ul>
            <ul className="Register_list list5">
              <li className="register_item register_title">
                <p className="register_text">Дата регистрации</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">29.01.2016</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">29.01.2016</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">29.01.2016</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">20.02.2016</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">20.02.2016</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">11.03.2016</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">11.03.2016</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">11.03.2016</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">14.03.2016</p>
              </li>
              <li className="register_item register_title">
                <p className="register_text number">14.03.2016</p>
              </li>
            </ul>
            <ul className="Register_list list6">
              <li className="register_item register_title">
                <p className="register_text">Адрес сайта</p>
              </li>
              <li className="register_item register_title">
                <a
                  href="https://ru.wikipedia.org/wiki/%D0%A1%D0%A3%D0%91%D0%94_%D0%A0%D0%B5%D0%B4_%D0%91%D0%B0%D0%B7%D0%B0_%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D1%85#:~:text=%D0%A1%D0%A3%D0%91%D0%94%20%D0%A0%D0%B5%D0%B4%20%D0%91%D0%B0%D0%B7%D0%B0%20%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20(Red,%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%B0%D0%BC%20%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0%2C%20%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B8%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8."
                  className="register_links"
                >
                  Ссылка
                </a>
              </li>
              <li className="register_item register_title">
                <a
                  href="https://obr.1c.ru/educational/uchenikam/informatika-11-kl-2-e-izd-/"
                  className="register_links"
                >
                  Ссылка
                </a>
              </li>
              <li className="register_item register_title">
                <a
                  href="https://obr.1c.ru/educational/uchenikam/informatika-11-kl-2-e-izd-/"
                  className="register_links"
                >
                  Ссылка
                </a>
              </li>
              <li className="register_item register_title">
                <a
                  href="https://obr.1c.ru/educational/uchenikam/informatika-11-kl-2-e-izd-/"
                  className="register_links"
                >
                  Ссылка
                </a>
              </li>
              <li className="register_item register_title">
                <a
                  href="https://obr.1c.ru/educational/uchenikam/informatika-11-kl-2-e-izd-/"
                  className="register_links"
                >
                  Ссылка
                </a>
              </li>
              <li className="register_item register_title">
                <a
                  href="https://obr.1c.ru/educational/uchenikam/informatika-11-kl-2-e-izd-/"
                  className="register_links"
                >
                  Ссылка
                </a>
              </li>
              <li className="register_item register_title">
                <a
                  href="https://obr.1c.ru/educational/uchenikam/informatika-11-kl-2-e-izd-/"
                  className="register_links"
                >
                  Ссылка
                </a>
              </li>
              <li className="register_item register_title">
                <a
                  href="https://obr.1c.ru/educational/uchenikam/informatika-11-kl-2-e-izd-/"
                  className="register_links"
                >
                  Ссылка
                </a>
              </li>
              <li className="register_item register_title">
                <a
                  href="https://obr.1c.ru/educational/uchenikam/informatika-11-kl-2-e-izd-/"
                  className="register_links"
                >
                  Ссылка
                </a>
              </li>
              <li className="register_item register_title">
                <a
                  href="https://obr.1c.ru/educational/uchenikam/informatika-11-kl-2-e-izd-/"
                  className="register_links"
                >
                  Ссылка
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="hr" />
        <div className="Register_footer">
          <ul className="register_footer_list">
            <li className="register_footer_item">
              <img src={Arrow} className="number_footer" alt="arrow" />
            </li>
            <li className="register_footer_item">
              <img src={Vector} className="number_footer" alt="arrow" />
            </li>
            <li className="register_footer_item">
              <p className="number_footer">1</p>
            </li>
            <li className="register_footer_item">
              <p className="number_footer">2</p>
            </li>
            <li className="register_footer_item">
              <p className="number_footer">3</p>
            </li>
            <li className="register_footer_item">
              <p className="number_footer">4</p>
            </li>
            <li className="register_footer_item">
              <p className="number_footer">...</p>
            </li>
            <li className="register_footer_item">
              <p className="number_footer">112</p>
            </li>
            <li className="register_footer_item">
              <p className="number_footer">113</p>
            </li>
            <li className="register_footer_item">
              <img src={Vector2} className="number_footer" alt="arrow" />
            </li>
            <li className="register_footer_item">
              <img src={Arrow2} className="number_footer"_footer alt="arrow" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Register;
