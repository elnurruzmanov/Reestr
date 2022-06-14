import React from "react";
import "./Documents.css";
import File from "../../images/file.png"
import Download from "../../images/download.png"

const Documents = () => {
  return (
    <div className="Documents">
      <div className="container">
        <h1>Документы</h1>
        <p>
          Всего документов: <span className="documents_span">5</span>{" "}
        </p>
        <hr className="hr" />
        <div className="documents_lists">
          <ul className="document_list">
            <li className="documents_item">
              <p className="documents_text">Категория</p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">Общие документы</p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">Общие документы</p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">Общие документы</p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">Общие документы</p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">Общие документы</p>
            </li>
          </ul>

          <ul className="document_list list2">
            <li className="documents_item">
              <p className="documents_text">Наименование </p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">
                Постановление Правительства Российской Федерации от 20.07.2021
              </p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">
                Приказ для электронных вычислительных машин и баз данных
              </p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">
                Административный регламент ПРИКАЗ от 21 февраля 2019 года N62
              </p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">
                Постановление Правительства РФ от 20.12.2017 № 1594 "О внесении
                изменений в постановление
              </p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">
                Об утверждении вычислительных машин и баз данных.
              </p>
            </li>
          </ul>
          <ul className="document_list list3">
            <li className="documents_item">
              <p className="documents_text"> Дата</p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">1226</p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">468</p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">61 </p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents"> 1594</p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents"> 622</p>
            </li>
          </ul>

          <ul className="document_list list3">
            <li className="documents_item">
              <p className="documents_text">Номер</p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">20.04.2014</p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">20.07.2018 </p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">20.04.2011 </p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">20.07.2018 </p>
            </li>
            <li className="documents_item">
              <p className="documents_text all_documents">20.02.2022 </p>
            </li>
          </ul>
          <ul className="document_list list5">
            <li className="documents_item documents_download">
              <img className="file" src={File} alt="file" />
              <p className="documents_text ">Содержание</p>
            </li>
            <li className="documents_item documents_download">
              <img className="download" src={Download} alt="file" />
              <p className="documents_text all_documents download_documents">
                Скачать (469 Кб)
              </p>
            </li>
            <li className="documents_item">
              <img className="download" src={Download} alt="file" />
              <p className="documents_text all_documents download_documents">
                Скачать (10.81 Мб)
              </p>
            </li>
            <li className="documents_item">
              <img className="download" src={Download} alt="file" />
              <p className="documents_text all_documents download_documents">
                Скачать (2.25 Мб)
              </p>
            </li>
            <li className="documents_item">
              <img className="download" src={Download} alt="file" />
              <p className="documents_text all_documents download_documents">
                Скачать (2.07 Мб)
              </p>
            </li>
            <li className="documents_item">
              <img className="download" src={Download} alt="file" />
              <p className="documents_text all_documents download_documents">
                Скачать (4.69 Мб)
              </p>
            </li>
          </ul>
        </div>
        <hr className="hr" />
      </div>
    </div>
  );
};

export default Documents;
