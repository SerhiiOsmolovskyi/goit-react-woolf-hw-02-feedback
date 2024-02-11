import React, { useState } from 'react'
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App = () => {

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setState((prevState) => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  const { good, neutral, bad } = state;
  const totalFeedback = good + neutral + bad;
  const showStatistics = totalFeedback > 0;
  const noFeedbackMessage = "There is no feedback";

  return (
    <div>
    <Section title="Leave your feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {showStatistics ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <Notification message= {noFeedbackMessage} />
        )}
      </Section>
    </div>
  );
};
