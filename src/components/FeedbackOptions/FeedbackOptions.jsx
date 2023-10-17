import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.length === 0 ? (
      <p>There is no feedback</p>
    ) : (
      <div>
        {options.map((option) => (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    )}
  </div>
);

export default FeedbackOptions;
