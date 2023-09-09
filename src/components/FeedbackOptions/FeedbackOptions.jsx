import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btnList}>
      {options.map(option => {
        return (
          <button
            className={css.btn}
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option[0].toUpperCase() + option.substring(1)}
          </button>
        );
      })}
    </ul>
  );
};
