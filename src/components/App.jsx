import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Box } from './Box';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const totalFeedback = (good + neutral + bad);
  const countPositiveFeedbackPercentage = Math.round(good / totalFeedback * 100);

  const updateFeedback = (button) => {
    switch (button) {
      case 'good':
        setGood(prState => prState + 1);
        break;
      case 'neutral':
        setNeutral(prState => prState + 1);
        break;
      case 'bad':
        setBad(prState => prState + 1);
        break;
      default:
        console.log(`Error in type ${button}`);
    }
  };

  return (<Box bg='#ead39c'
               width='300px'
               height='250px'
               mx='auto'
               p='16px'
               mt='30px'
               borderRadius='10px'>
      <Section title='Please leave your feedback'>
        <FeedbackOptions options={options}
                         onLeaveFeedback={updateFeedback} />
      </Section>
      <Section title='Statistics'>
        {totalFeedback > 0 ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage} /> :
          <Notification message='There is no feedback' />}
      </Section>
    </Box>
  );
};
