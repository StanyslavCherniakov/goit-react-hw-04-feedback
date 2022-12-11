import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = (event) => {
    if (event.target.textContent === 'Good') {
      this.setState((prevState) => ({
        good: prevState.good + 1,
      }));
    }
    if (event.target.textContent === 'Neutral') {
      this.setState((prevState) => ({
        neutral: prevState.neutral + 1,
      }));
    }
    if (event.target.textContent === 'Bad') {
      this.setState((prevState) => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback = (state) => {
    const feedbackValues = Object.values(state);
    return feedbackValues.reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = (state) => {
    const feedbackValues = Object.values(state);
    const totalFeedback = feedbackValues.reduce((acc, el) => acc + el, 0);
    const feedbackValue = state.good;
    return Math.round(feedbackValue / totalFeedback * 100);
  };


  render() {
    return (<div>
      <p>Please leave your feedback</p>
      <button onClick={this.updateFeedback}>Good</button>
      <button onClick={this.updateFeedback}>Neutral</button>
      <button onClick={this.updateFeedback}>Bad</button>

      <p>Statistics</p>
      <span>Good: {this.state.good}</span>
      <span>Neutral: {this.state.neutral}</span>
      <span>Bad: {this.state.bad}</span>
      <span>Total: {this.countTotalFeedback(this.state)}</span>
      <span>Positive feedback: {this.countPositiveFeedbackPercentage(this.state) ? `${this.countPositiveFeedbackPercentage(this.state)}%` : null}</span>
    </div>);
  }
}

// App.propTypes = {};



