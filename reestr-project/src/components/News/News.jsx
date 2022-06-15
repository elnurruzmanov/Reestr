import React from "react";
import "./News.css"

import Works from "../../images/works.png";
import Works2 from "../../images/works2.png";
import Resume from "../../images/Resume.png";
import Settings_file from "../../images/setting_file.png"
import Today_Calendar from "../../images/calendar2.png";

const News = () => {
  return (
    <div className="News_info">
      <div className="container">
        <h1 className="News_title">Новости реестра</h1>
        <div className="News-list_info">
          <ul className="News_list">
            <li className="news_item">
              <img src={Works} alt="Engieering works" />
              <p className="works_time-text">Технические работы 30.05.2022</p>
              <div className="works_calendar">
                <img src={Today_Calendar} alt="Calendar2" />
                <a href="/https://www.timeanddate.com/calendar/">30.05.2022</a>
              </div>
              <p className="works_text">
                В связи с проведением технических работ 30.05.2022 с 15:00 могут
                наблюдаться пер...
              </p>
            </li>
            <li className="news_item">
              <img
                className="works_image"
                src={Resume}
                alt="Engieering works"
              />
              <p className="works_time-text">Технические работы 30.05.2022</p>
              <div className="works_calendar">
                <img src={Today_Calendar} alt="Calendar2" />
                <a href="https://www.timeanddate.com/calendar/">30.05.2022</a>
              </div>
              <p className="works_text">
                В связи с проведением технических работ 30.05.2022 с 15:00 могут
                наблюдаться пер...
              </p>
            </li>
            <li className="news_item">
              <img
                src={Works2}
                className="works_image"
                alt="Engieering works"
              />
              <p className="works_time-text">Технические работы 30.05.2022</p>
              <div className="works_calendar">
                <img src={Today_Calendar} alt="Calendar2" />
                <a href="https://www.timeanddate.com/calendar/">30.05.2022</a>
              </div>
              <p className="works_text">
                В связи с проведением технических работ 30.05.2022 с 15:00 могут
                наблюдаться пер...
              </p>
            </li>
            <li className="news_item">
              <img src={Works} className="works_image" alt="Engieering works" />
              <p className="works_time-text">Технические работы 30.05.2022</p>
              <div className="works_calendar">
                <img src={Today_Calendar} alt="Calendar2" />
                <a href="https://www.timeanddate.com/calendar/">30.05.2022</a>
              </div>
              <p className="works_text">
                В связи с проведением технических работ 30.05.2022 с 15:00 могут
                наблюдаться пер...
              </p>
            </li>
            <li className="news_item">
              <img src={Settings_file} className="works_image" alt="Engieering works" />
              <p className="works_time-text">Технические работы 30.05.2022</p>
              <div className="works_calendar">
                <img src={Today_Calendar} alt="Calendar2" />
                <a href="https://www.timeanddate.com/calendar/">30.05.2022</a>
              </div>
              <p className="works_text">
                В связи с проведением технических работ 30.05.2022 с 15:00 могут
                наблюдаться пер...
              </p>
            </li>
            <li className="news_item">
              <img src={Works} className="works_image" alt="Engieering works" />
              <p className="works_time-text">Технические работы 30.05.2022</p>
              <div className="works_calendar">
                <img src={Today_Calendar} alt="Calendar2" />
                <a href="https://www.timeanddate.com/calendar/">30.05.2022</a>
              </div>
              <p className="works_text">
                В связи с проведением технических работ 30.05.2022 с 15:00 могут
                наблюдаться пер...
              </p>
            </li>
          </ul>
          <button className="work_btn">Показать все</button>
        </div>
      </div>
    </div>
  );
};

export default News;
