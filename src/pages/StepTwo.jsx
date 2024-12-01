import { useState } from "react";
import { Button, Input } from "../components";
import { useNavigate } from "react-router-dom";

export const StepTwo = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState(""); // Состояние для текста ответа
  const [error, setError] = useState(""); // Состояние для ошибки

  // Ответы на русском, английском и узбекском
  const correctAnswers = [
    "париж", // На русском
    "paris",  // На английском
    "parij",  // На узбекском
  ];

  // Обработчик изменения ввода
  const handleInputChange = (e) => {
    setAnswer(e.target.value);
    setError(""); // Сброс ошибки при изменении ответа
  };

  // Обработчик клика по кнопке "Далее"
  const handleNextStep = () => {
    // Проверка, если ответ правильный
    if (correctAnswers.includes(answer.trim().toLowerCase())) {
      navigate("/step/3"); // Переход на третий шаг
    } else {
      setError("Неверный ответ. Попробуйте снова."); // Показать ошибку
    }
  };

  const isButtonDisabled = answer.trim().length === 0;

  return (
    <div className="single-input-quiz">
      <div className="question">
        <h2>2. Какой город является столицей Франции?</h2> {/* Замените на ваш вопрос */}
        <Input
          type="text"
          name="answer"
          placeholder="Введите ваш ответ"
          errorMessage="Введите номер в правильном формате"
          value={answer}
          onChange={handleInputChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Показываем ошибку, если ответ неверный */}
        <Button
          type="button"
          id="next-btn"
          text="Далее"
          onClick={handleNextStep}
          disabled={isButtonDisabled}
        />
      </div>
    </div>
  );
  
};
