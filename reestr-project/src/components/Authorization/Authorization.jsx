import React from "react";
import "./Authorization.css";
import { useForm } from "react-hook-form";
import Checked from "../../images/Checked.png"

import Home2 from "../../images/Home2.png";

const Authorization = () => {
  const { register, formState:{
    errors 
  }, handleSubmit, reset } = useForm({mode:"onBlur"});

// isValid

  const onSubmit= (data)=>{
    (JSON.stringify(data))
    reset();
  }

  return (
    <>
      <div className="Authorization">
        <div className="container">
          <div className="Authorization_link">
            <a href="/Documents" className="Authorization_links">
              <img src={Home2} alt="Home2" />
              <p>Главная</p>
            </a>
          </div>
          <div className="Authorization_forms">
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label">
                <p>Имя</p>

                <input
                  className="Authorization_input"
                  {...register("firstName", {
                    required: "поле обьязательно к заполнением",
                    minLength: {
                      value: 5,
                      message: "минимум 5 символов",
                    },
                  })}
                  placeholder="Введите
                  имя"
                  type="text"
                />
              </label>
              <div className="Authorization_errors">
                <div className="Authorization_error" style={{ height: 40 }}>
                  {errors?.firstName && (
                    <p className="Authorization_email">
                      {errors?.firstName?.message || "Error"}
                    </p>
                  )}
                </div>
                {/* <img src={Checked} alt="Checked" /> */}
              </div>
              <label className="label">
                <p>LastName</p>

                <input
                  className="Authorization_input"
                  {...register("LastName", {
                    required: "поле обьязательно к заполнением",
                    minLength: {
                      value: 5,
                      message: "минимум 5 символов",
                    },
                  })}
                  placeholder="Введите
                  имя"
                  type="text"
                />
              </label>
              <div style={{ height: 40 }}>
                {errors?.LastName && (
                  <p className="Authorization_email">
                    {errors?.LastName?.message || "Error"}
                  </p>
                )}
                <div className="checkbox_check">
                  <input type="checkbox" className="checkbox" required />
                  <p className="checkbox_text">
                    Запомнить меня на этом компьютере
                  </p>
                </div>
              </div>

              {/* disabled={!isValid} */}
              <button className="Authorization_btn">
                <input className="Authorization_submit" type="submit" />
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authorization;
