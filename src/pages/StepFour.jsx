import { Button, Input } from "../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Импортируем хук useNavigate

// Массив вариантов для ответа (например, разные цвета)
const colorVariants = [
  { label: 'Красный', value: 'red' },
  { label: 'Синий', value: 'blue' },
  { label: 'Зеленый', value: 'green' },
  { label: 'Желтый', value: 'yellow' },
];

export const StepFour = () => {
  const [selectedColor, setSelectedColor] = useState(null); // Состояние для выбранного ответа
  const navigate = useNavigate(); // Инициализируем useNavigate для перехода

  // Обработчик выбора цвета
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value); // Обновляем состояние с выбранным цветом
  };

  // Логика для включения кнопки, когда цвет выбран
  const isButtonDisabled = selectedColor === null;

  // Обработчик клика по кнопке "Далее"
  const handleNextStep = () => {
    navigate("/thanks"); // Переход на страницу /thanks
  };

  return (
    <div className="emoji-quiz">
      <div className="question">
        <h2>4. Какой ваш любимый цвет?</h2> {/* Новый вопрос */}
        <ul className="color-variants">
          {
            colorVariants.map(({ label, value }, index) => (
              <li className="variant-wrapper" key={index}>
                {/* Радиокнопки для выбора цвета */}
                <Input
                  type="radio"
                  name="color"
                  id={`color-${value}`}
                  value={value}
                  onChange={handleColorChange} // Обработчик для изменения состояния
                />
                <label htmlFor={`color-${value}`}>{label}</label> {/* Подписи для цветов */}
              </li>
            ))
          }
        </ul>
        <Button
          type="button"
          id="next-btn"
          text="Далее"
          onClick={handleNextStep} // Переход на страницу /thanks
          disabled={isButtonDisabled} // Отключаем кнопку, если цвет не выбран
        />
      </div>
    </div>
  );
};
