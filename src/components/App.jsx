import React, { Component } from 'react';
import handleFeedback from "components/handleFeedback/handleFeedback";
import FeedbackButtons from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (option) => {
    handleFeedback(option, this.setState.bind(this));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad, } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackButtons
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
    
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />

      </div>
    );
  }
}
