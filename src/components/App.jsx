import { FeedbackOptions } from 'components/Feedback/Feedback';
import Statistics2 from 'components/Statistics/Statistics2';
import Section from 'components/Section/Section';
import React, { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);

  const [neutral, setNeutral] = useState(0);

  const [bad, setBad] = useState(0);

  const onLeaveFeedback = evt => {
    console.log(evt.target);

    const { name } = evt.target;

    switch (name) {
      case 'good':
        setGood(good + 1);

        break;

      case 'neutral':
        setNeutral(neutral + 1);

        break;

      case 'bad':
        setBad(bad + 1);

        break;

      default:
        break;
    }
  };

  return (
    <>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />

        <Statistics2 good={good} neutral={neutral} bad={bad} />
      </Section>
    </>
  );
};

export default App;
