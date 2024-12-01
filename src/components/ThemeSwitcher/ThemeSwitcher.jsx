import React, { useState, useEffect } from "react";
import Switch from "react-switch"; // Импортируем Switch
import "./style.css"; // Подключаем стили для темы

export const ThemeSwitcher = () => {
  // Получаем сохранённую тему из localStorage, если она есть, или устанавливаем светлую тему по умолчанию
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  // Хук, который следит за изменением темы и сохраняет её в localStorage
  useEffect(() => {
    document.body.className = theme; // Применяем класс темы к body
    localStorage.setItem("theme", theme); // Сохраняем выбранную тему в localStorage
  }, [theme]);

  // Функция для переключения темы
  const handleThemeChange = (checked) => {
    setTheme(checked ? "dark" : "light"); // Переключаем тему
  };

  return (
    <div className="theme-switcher">
      <label>Переключить тему:</label>
      <Switch
        onChange={handleThemeChange} // Обработчик смены
        checked={theme === "dark"} // Если текущая тема тёмная, то switch будет включён
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={40}
      />
    </div>
  );
};
