import { Button } from "../components";

export const Thanks = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="/img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса!</h1>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <Button text="Получить ссылку" type="button" id="get-link" />
        </div>
      </div>
    </div>
  );
};
