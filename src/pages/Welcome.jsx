import { useState } from "react";
import { useNavigate } from "react-router";

import { Button, Input } from "../components";

export const Welcome = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [userData, setUserData] = useState({ name: "", phone: "" });

  const onNameInputHandler = (e) => {
    const value = e.target.value.trim();

    setUserData((prev) => ({
      ...prev,
      name: value,
    }));

    checkFormValidity(value, userData.phone);
  };

  const onPhoneInputHandler = (e) => {
    const value = e.target.value.trim();

    // Новое регулярное выражение для строгой проверки номера
    const phonePattern = /^\+998\s?\d{2}\s?\d{3}\s?\d{4}$/;
    const isValidPhone = phonePattern.test(value);

    setUserData((prev) => ({
      ...prev,
      phone: isValidPhone ? value : "",
    }));

    checkFormValidity(userData.name, isValidPhone ? value : "");
  };

  const checkFormValidity = (name, phone) => {
    if (name.length >= 3 && phone) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/step/1");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form className="welcome__form" onSubmit={onSubmitHandler}>
            <Input
              label="Ваше имя"
              type="text"
              name="username"
              id="username"
              placeholder="Ваш ответ"
              onInput={onNameInputHandler}
            />
            <Input
              label="Ваш номер"
              type="tel"
              name="phone"
              id="phone"
              placeholder="+998 XX XXX XXXX"
              onInput={onPhoneInputHandler}
            />
            <Button type="submit" id="next-btn" text="Далее" disabled={isDisabled} />
          </form>
        </div>
      </div>
    </div>
  );
};