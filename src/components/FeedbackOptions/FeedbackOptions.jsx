import React from 'react';
import PropTypes from 'prop-types';
import { BadBtn, GoodBtn, NeutralBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <GoodBtn onClick={onLeaveFeedback}>Good</GoodBtn>
      <NeutralBtn onClick={onLeaveFeedback}>Neutral</NeutralBtn>
      <BadBtn onClick={onLeaveFeedback}>Bad</BadBtn>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
