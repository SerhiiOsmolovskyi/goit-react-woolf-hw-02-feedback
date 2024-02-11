import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () => ((good / countTotalFeedback()) * 100).toFixed(0) || 0;

  return (
    <div className={css.statisticsContainer}>
      <p className={css.statisticsItem}>Good: {good}</p>
      <p className={css.statisticsItem}>Neutral: {neutral}</p>
      <p className={css.statisticsItem}>Bad: {bad}</p>
      <p className={css.statisticsItem}>Total: {countTotalFeedback()}</p>
      <p className={`${css.statisticsItem} ${css.positiveFeedback}`}>
        Positive feedback: {countPositiveFeedbackPercentage()}%
      </p>
    </div>
  );
};