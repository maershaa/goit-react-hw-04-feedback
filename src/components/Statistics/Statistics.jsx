// import css from 'components/Statistics/Statistics.module.css'; 
// import React, { Component } from "react";
// import Notification from '../Notification/Notification';


// class Statistics extends Component {
// render() {
//     const { good, neutral, bad } = this.props; // Принимаем значения из props

//     const totalFeedback = good + neutral + bad; // Вычисляем общее количество отзывов
//     const positivePercentage = Math.round((100 / totalFeedback) * good); // Вычисляем процент положительных отзывов
    

//     return (
//       <div>
//         {totalFeedback >= 1 ? ( // Отображать блок статистики только если есть хотя бы один отзыв
//           <ul className={css.resultsContainer}>
//             <li>Good: {good}</li>
//             <li>Neutral: {neutral}</li>
//             <li>Bad: {bad}</li>
//             {/* Отображать элемент "Total" только в том случае, если good + neutral + bad >= 1, иначе его не отображать */}
//             {totalFeedback >= 1 && (
//               <li>Total: {totalFeedback}</li>
//             )}

//             {/* Отображать элемент "Positive feedback" только в том случае, если процент положительных отзывов >= 1, иначе его не отображать */}
//             {positivePercentage >= 1 && (
//               <li>Positive feedback: {positivePercentage}%</li>
//             )}
//           </ul>
//         ) : (
//           <Notification message="There is no feedback" /> // Выводить сообщение вместо блока статистики, если нет отзывов
//         )}
//       </div>
//     );
//   }
// }

// export default Statistics;
