import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button onClick={onLeaveFeedback}>Good</button>
      <button onClick={onLeaveFeedback}>Neutral</button>
      <button onClick={onLeaveFeedback}>Bad</button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
