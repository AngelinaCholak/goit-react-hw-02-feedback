import css from './feedbackoptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.length === 0 ? (
      <p className={css.noFeedback}>There is no feedback</p>
    ) : (
      <div>
        {options.map((option) => (
          <button className={css.feedbackButton} key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    )}
  </div>
);

export default FeedbackOptions;
