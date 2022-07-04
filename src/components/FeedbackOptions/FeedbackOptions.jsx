import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(name => (
        <button
          type="button"
          key={name}
          onClick={onLeaveFeedback}
          name={name}
          className={css.btn}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
