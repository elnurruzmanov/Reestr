import React from "react";
import "./Answers.css"
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
            <img src={Plus} alt="Plus" />
            <h3 className="Answer_questions-title">
              Для подачи заявления необходимо подготовить
            </h3>
          </div>
          <div className="answers-questions_text">
            <p>
              1. Данные для авторизации в личном кабинете
              <p>
                2. Квалифицированный сертификат ключа проверки электронной
                подписи.
              </p>
              <p>
                3. Сведения, документы и материалы в соответствии с
                Методическими рекомендациями.
              </p>
              <p>
                4. Установить специализированное ПО для подписания документов
                электронной подписью. Подписание производится с использованием
                усиленной квалифицированной (отсоединяемой) электронной подписи.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
