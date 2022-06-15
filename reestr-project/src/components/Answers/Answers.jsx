import React from "react";
import "./Answers.css"
import Exit from "../../images/exit.png";
import Plus from "../../images/plus.png";

const Answers = () => {
  return (
    <div className="Answers">
      <div className="container">
        <div className="Answers_info">
          <h1>Вопрос-ответ</h1>
        </div>
        <div className="Answers_questions">
          <div className="Answers_questions-info">
            <img src={Exit} alt="Exit" />
            <h3 className="Answer_questions-title">
              Для подачи заявления необходимо подготовить
            </h3>
          </div>
          <div className="answers-questions_text">
            <p>1. Данные для авторизации в личном кабинете</p>
            <p>
              2. Квалифицированный сертификат ключа проверки электронной
              подписи.
            </p>
            <p>
              3. Сведения, документы и материалы в соответствии с Методическими
              рекомендациями.
            </p>
            <p>
              4. Установить специализированное ПО для подписания документов
              электронной подписью. Подписание производится с использованием
              усиленной квалифицированной (отсоединяемой) электронной подписи.
            </p>
          </div>
          <div className="Answers_questions-info">
            <img src={Plus} alt="Plus" />
            <h3 className="Answer_questions-title">
              Связь с оператором реестра
            </h3>
          </div>
          <div className="Answers_questions-info">
            <img src={Plus} alt="Plus" />
            <h3 className="Answer_questions-title">
              Как подать заявление на включение программного обеспечения в
              реестр
            </h3>
          </div>
          <div className="Answers_questions-info">
            <img src={Plus} alt="Plus" />
            <h3 className="Answer_questions-title">
              Где можно подать заявление
            </h3>
          </div>
          <div className="Answers_questions-info">
            <img src={Plus} alt="Plus" />
            <h3 className="Answer_questions-title">
              Как узнать мне причину отказа
            </h3>
          </div>
          <div className="Answers_questions-info">
            <img src={Plus} alt="Plus" />
            <h3 className="Answer_questions-title">
              Что делать, если Вам отказали
            </h3>
          </div>
          <div className="Answers_questions-info">
            <img src={Plus} alt="Plus" />
            <h3 className="Answer_questions-title">
              Изменение реестревой записи
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
