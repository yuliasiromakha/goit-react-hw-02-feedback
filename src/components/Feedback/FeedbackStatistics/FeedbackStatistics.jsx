import React, { useState } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import FeedbackTitle from "../FeedbackTitle/FeedbackTitle";
import Notification from "../Notification/Notification";

const FeedbackStatistics = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const addReview = (name) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const totalFeedback = countTotalFeedback();
    const percentage = Math.round((good / totalFeedback) * 100);

    if (totalFeedback === 0) {
      return 0;
    }

    return percentage;
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <>
      <FeedbackOptions addReview={addReview} options={Object.keys(feedback)} />

      <FeedbackTitle
        title="Statistics"
        style={{
          fontSize: 25,
          marginTop: 30,
          marginLeft: 30
        }}
      />

      {totalFeedback === 0 ? (
        <Notification message="There is no feedback" styles={{ marginLeft: 30 }} />
      ) : (
        <Statistics
          styles={{ listStyle: "none" }}
          goodRate={good}
          neutralRate={neutral}
          badRate={bad}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
};

export default FeedbackStatistics;
