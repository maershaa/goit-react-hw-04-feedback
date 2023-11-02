import css from 'components/Statistics/Statistics.module.css';
import React, { Component } from "react";
import Notification from '../Notification/Notification';

class Statistics2 extends Component {
  // Вспомогательный метод для вычисления общего количества отзывов
  countTotalFeedback() {
    const { good, neutral, bad } = this.props;
    return good + neutral + bad;
  }

  // Вспомогательный метод для вычисления процента положительных отзывов
  countPositiveFeedbackPercentage() {
    const { good } = this.props;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? Math.round((100 / totalFeedback) * good) : 0;
  }

  render() {
    const totalFeedback = this.countTotalFeedback(); // Добавил объявление totalFeedback
    const positivePercentage = this.countPositiveFeedbackPercentage(); // Добавил объявление positivePercentage

    return (
      <div>
        {totalFeedback >= 1 ? ( // Отображать блок статистики только если есть хотя бы один отзыв
          <ul className={css.resultsContainer}>
            <li>Good: {this.props.good}</li>
            <li>Neutral: {this.props.neutral}</li>
            <li>Bad: {this.props.bad}</li>
            {/* Отображать элемент "Total" только в том случае, если good + neutral + bad >= 1, иначе его не отображать */}
            {totalFeedback >= 1 && (
              <li>Total: {totalFeedback}</li>
            )}
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
  }
}

export default Statistics2;
