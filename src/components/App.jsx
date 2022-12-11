import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

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
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state) ?
      this.countPositiveFeedbackPercentage(this.state) : '';

    return (<div>
        <Section title='Please leave your feedback'>
          <FeedbackOptions onLeaveFeedback={this.updateFeedback} />
        </Section>
        <Section title='Statistics'>
          {totalFeedback > 0 ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage} /> :
            <Notification message='There is no feedback' />}
        </Section>

      </div>
    )
      ;
  }
}




