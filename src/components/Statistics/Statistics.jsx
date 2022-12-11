import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return <>
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
    <span>Total: {total}</span>
    <span>Positive feedback: {positivePercentage ? `${positivePercentage}%` : null}</span>
  </>;
};


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};







