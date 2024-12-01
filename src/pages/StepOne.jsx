import { useState } from "react";
import { Button, Input } from "../components";
import { useNavigate } from "react-router-dom";

export const StepOne = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState(""); // Состояние для текста ответа
  const [error, setError] = useState(""); // Состояние для ошибки

  // Обработчик изменения ввода
  const handleInputChange = (e) => {
    setAnswer(e.target.value);
    setError(""); // Сброс ошибки при изменении ответа
  };

  // Ответы на русском, английском и узбекском
  const correctAnswers = [
    "джо байден", // На русском
    "joe biden",   // На английском
    "жо байден",   // На узбекском
  ];

  // Обработчик клика по кнопке "Далее"
  const handleNextStep = () => {
    // Проверка, если ответ правильный
    if (correctAnswers.includes(answer.trim().toLowerCase())) {
      navigate("/step/2"); // Переход на второй шаг
    } else {
      setError("Неверный ответ. Попробуйте снова."); // Показать ошибку
    }
  };

  const isButtonDisabled = answer.trim().length === 0;

  return (
    <div className="single-input-quiz">
      <div className="question">
        <h2>1. Как зовут президента США?</h2> {/* Ваш вопрос */}
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
