import classNames from "classnames";
import "./style.css";

export const Progress = ({ steps, activeStep, onStepClick }) => {
  const progress = (100 / steps) * (activeStep - 1) + "%";

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">Прогресс прохождения:</span>
        <span className="indicator__value">{progress}</span>
      </div>
      <div className="indicator__progressbar">
        {Array(steps)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={classNames({
                indicator__unit: true,
                [`indicator__unit-${index + 1}`]: true,
                _active: index < activeStep,
                _current: index === activeStep - 1,
              })}
              onClick={() => {
                if (index + 1 <= activeStep) {
                  onStepClick(index + 1); // Переход на шаг по индексу
                }
              }}
            />
          ))}
      </div>
    </div>
  );
};
