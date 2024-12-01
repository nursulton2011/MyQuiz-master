import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Progress } from "../components";
import { STEPS_AMOUNT } from "../constants";

export const Step = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeStep = parseInt(location.pathname.split("/")[2], 10); // Получаем текущий шаг из URL

  // Функция для обработки переходов по шагам
  const handleStepClick = (step) => {
    if (step <= activeStep) { // Переход только на пройденные шаги
      navigate(`/step/${step}`);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Progress
          steps={STEPS_AMOUNT}
          activeStep={activeStep}
          onStepClick={handleStepClick}
        />
        <Outlet />
      </div>
    </div>
  );
};
