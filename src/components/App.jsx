import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleFeedback = type => {
    this.setState(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const showStatistics = totalFeedback > 0;
    const noFeedbackMessage = 'There is no feedback';

    return (
      <div>
        <Section title="Leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {showStatistics ? (
            <Statistics good={good} neutral={neutral} bad={bad} />
          ) : (
            <Notification message={noFeedbackMessage} />
          )}
        </Section>
      </div>
    );
  }
}
