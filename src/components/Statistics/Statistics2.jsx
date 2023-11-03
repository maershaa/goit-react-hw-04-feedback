import css from 'components/Statistics/Statistics.module.css';
import React from 'react';
import PropTypes from 'prop-types'; //npm install --save prop-types
import Notification from '../Notification/Notification';

const Statistics2 = ({ good, neutral, bad }) => {
  // Вспомогательный метод для вычисления общего количества отзывов

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // Вспомогательный метод для вычисления процента положительных отзывов

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();

    return totalFeedback > 0 ? Math.round((100 / totalFeedback) * good) : 0;
  };

  const positivePercentage = countPositiveFeedbackPercentage(); // Добавил объявление positivePercentage

  const totalFeedback = countTotalFeedback();

  return (
    <div>
      {totalFeedback >= 1 ? ( // Отображать блок статистики только если есть хотя бы один отзыв
        <ul className={css.resultsContainer}>
          <li>Good: {good}</li>

          <li>Neutral: {neutral}</li>

          <li>Bad: {bad}</li>

          {/* Отображать элемент "Total" только в том случае, если good + neutral + bad >= 1, иначе его не отображать */}

          {totalFeedback >= 1 && <li>Total: {totalFeedback}</li>}

          {/* Отображать элемент "Positive feedback" только в том случае, если процент положительных отзывов >= 1, иначе его не отображать */}

          {positivePercentage >= 1 && (
            <li>Positive feedback: {positivePercentage}%</li>
          )}
        </ul>
      ) : (
        <Notification message="There is no feedback" /> // Выводить сообщение вместо блока статистики, если нет отзывов
      )}
    </div>
  );
};

export default Statistics2;

Statistics2.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
