import { useState } from "react";
import { Button, Input } from "../components";
import { useNavigate } from "react-router-dom";

// Массив вариантов ответов
const emojiVariants = [
  {
    label: 'Смех',
    img: 'laugh.png'
  },
  {
    label: 'Сердечки',
    img: 'hearts.png'
  },
  {
    label: 'Ухмылка',
    img: 'smirk.png'
  },
  {
    label: 'Ужас',
    img: 'fright.png'
  }
];

export const StepThree = () => {
  const [selectedVariant, setSelectedVariant] = useState(null); // Состояние для отслеживания выбранного варианта
  const navigate = useNavigate(); // Для навигации на следующий шаг

  // Функция для обработки выбора варианта
  const handleVariantChange = (e) => {
    setSelectedVariant(e.target.value); // Обновляем состояние с выбранным вариантом
  };

  // Функция для перехода на следующий шаг (например, шаг 4)
  const handleNextStep = () => {
    navigate("/step/4"); // Переход на шаг 4
  };

  // Логика для включения кнопки "Далее", если вариант выбран
  const isButtonDisabled = selectedVariant === null;

  return (
    <div className="emoji-quiz">
      <div className="question">
        <h2>3. Какой ваш любимый смайлик?</h2> {/* Новый вопрос */}
        <ul className="emoji-variants">
          {
            emojiVariants.map(({ label, img }, index) => {
              const alt = img.split('.')[0];
              const src = '/img/' + img;
              return (
                <li className="variant-wrapper" key={index}>
                  <Input
                    type="radio"
                    name="variant"
                    id={`variant-${index}`}
                    value={index} // Устанавливаем значение, чтобы оно отражало индекс варианта
                    checked={selectedVariant === String(index)} // Проверка, выбран ли этот вариант
                    onChange={handleVariantChange} // Обработчик изменения
                  />
                  <label htmlFor={`variant-${index}`}>
                    <img src={src} alt={alt} />
                    <p>{label}</p>
                  </label>
                </li>
              );
            })
          }
        </ul>
        <Button
          type="button"
          id="next-btn"
          text="Далее"
          onClick={handleNextStep} // Переход на следующий шаг
          disabled={isButtonDisabled} // Делаем кнопку неактивной, если не выбран вариант
        />
      </div>
    </div>
  );
};
