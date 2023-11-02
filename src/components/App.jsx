import { FeedbackOptions }  from 'components/Feedback/Feedback';
import Statistics2 from 'components/Statistics/Statistics2';
import Section from 'components/Section/Section';
import React, { Component } from "react";

class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };
  
  onLeaveFeedback = evt => { 
    console.log(evt.target)
    const { name } = evt.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    })
  }

  
  render() {
       const { good, neutral, bad } = this.state;
  return (
    <Section title="Please leave a feedback">
      <FeedbackOptions
  options={Object.keys(this.state)}
  onLeaveFeedback={this.onLeaveFeedback}
/>
        <Statistics2 good={good} neutral={neutral} bad={bad} />
      </Section>
  );
  }
}

export default App;
