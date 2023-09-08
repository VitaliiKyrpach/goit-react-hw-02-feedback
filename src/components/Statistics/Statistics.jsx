export const Statistics = props => {
  return (
    <div>
      <ul
        style={{
          listStyleType: 'none',
        }}
      >
        <li>Good: {props.good}</li>
        <li>Neutral: {props.neutral}</li>
        <li>Bad: {props.bad}</li>
        <li>Total: {props.total}</li>
        <li>
          Positive feedback:
          {Math.round(props.positivePercentage)}%
        </li>
      </ul>
    </div>
  );
};
