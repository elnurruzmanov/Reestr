// import React from "react";
import { useState } from "react";
import "./Answers.css"
import Exit from "../../images/exit.png";
import Plus from "../../images/plus.png";

const Answers = () => {

  const [selected, setSelected]=useState(null)
  const toggle=(i)=>{
   if (selected === i) {
     return setSelected(null);
   }

   setSelected(i)
   
  }

  return (
    <div className="Answers">
      <div className="container">
        <div className="Answers_info">
          <h1>Вопрос-ответ</h1>
        </div>
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <span>{selected === i ? "-" : "+"}</span>
                <h2>{item.question}</h2>
              </div>
              <div lorem50 className={selected === i ? "show" : "content"}>{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const data = [
  {
    question: " Для подачи заявления необходимо подготовить",
    answer:
      "Lorem, ipsum dolor  dolorum eligendi nisi odit consectetur veniam doloribus maiores praesentium perspiciatis? Similique, tempore et ex d Delectus non neque dolorem. ",
  },
  {
    question: " Для подачи заявления необходимо подготовить",
    answer:
      "Lorem, ipsum dolor  dolorum eligendi nisi odit consectetur veniam doloribus maiores praesentium perspiciatis? Similique, tempore et ex d Delectus non neque dolorem.",
  },
  {
    question: " Для подачи заявления необходимо подготовить",
    answer:
      "Lorem, ipsum dolor  dolorum eligendi nisi odit consectetur veniam doloribus maiores praesentium perspiciatis? Similique, tempore et ex d Delectus non neque dolorem.",
  },
  {
    question: " Для подачи заявления необходимо подготовить",
    answer:
      "Lorem, ipsum dolor  dolorum eligendi nisi odit consectetur veniam doloribus maiores praesentium perspiciatis? Similique, tempore et ex d Delectus non neque dolorem.",
  },
  {
    question: " Для подачи заявления необходимо подготовить",
    answer:
      "Lorem, ipsum dolor  dolorum eligendi nisi odit consectetur veniam doloribus maiores praesentium perspiciatis? Similique, tempore et ex d Delectus non neque dolorem.",
  },
  {
    question: " Для подачи заявления необходимо подготовить",
    answer:
      "Lorem, ipsum dolor  dolorum eligendi nisi odit consectetur veniam doloribus maiores praesentium perspiciatis? Similique, tempore et ex d Delectus non neque dolorem.",
  },
  {
    question: " Для подачи заявления необходимо подготовить",
    answer:
      "Lorem, ipsum dolor  dolorum eligendi nisi odit consectetur veniam doloribus maiores praesentium perspiciatis? Similique, tempore et ex d Delectus non neque dolorem.",
  },
];

export default Answers;







