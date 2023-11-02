import React from "react";
import css from 'components/Section/Section.module.css';


// Компонент для отображения сообщения об отсутствии отзывов
const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
};

export default Section;

