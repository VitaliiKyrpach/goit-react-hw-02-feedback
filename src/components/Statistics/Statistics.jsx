import css from './Statistics.module.css';
export const Statistics = props => {
  return (
    <ul className={css.statList}>
      <li>Good: {props.good}</li>
      <li>Neutral: {props.neutral}</li>
      <li>Bad: {props.bad}</li>
      <li>Total: {props.total}</li>
      <li>Positive feedback: {Math.round(props.positivePercentage)}%</li>
    </ul>
  );
};
