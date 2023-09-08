export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul
      style={{
        display: 'flex',
        listStyleType: 'none',
        gap: 30,
      }}
    >
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </ul>
  );
};
