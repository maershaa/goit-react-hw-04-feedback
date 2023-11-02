import css from 'components/Feedback/Feedback.module.css';




export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
  return (
      <div className={css.feedbackContainer}>
       {options.map(option => {
        return (
      <button
            type="button"
            onClick={onLeaveFeedback}
            key={option}
            name={option}
            className={css.customButton}>
        {option}
          </button>
        );
      })}
    </div>
  );
}
