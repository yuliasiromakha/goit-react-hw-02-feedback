import React, { useState } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import FeedbackTitle from "../FeedbackTitle/FeedbackTitle";
import Notification from "../Notification/Notification";

const FeedbackStatistics = () => {

  const [goodFeedback, setGoodFeedback] = useState(0)
  const [neutralFeedback, setNeutralFeedback] = useState(0)
  const [badFeedback, setBadFeedback] = useState(0)


  const addReview = (name) => {
    switch (name) {
      case 'good':
        setGoodFeedback((prevCount) => prevCount + 1)
        break;
    
      case 'neutral':
        setNeutralFeedback((prevCount) => prevCount + 1)
        break;

      case 'bad':
        setBadFeedback((prevCount) => prevCount + 1)
        break;
      
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const countPositiveFeedbackPercentage = () => {

    const totalFeedback = countTotalFeedback();
    const percentage = Math.round((goodFeedback / totalFeedback) * 100);

    if (totalFeedback === 0) {
      return 0;
    }

    return percentage;
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <>
      <FeedbackOptions addReview={addReview} options={["good", "neutral", "bad"]} />

      <FeedbackTitle
        title="Statistics"
        style={{
          fontSize: 25,
          marginTop: 30,
          marginLeft: 30
        }}
      />

      {totalFeedback === 0 && <Notification message="There is no feedback" styles={{ marginLeft: 30 }} />}
      {totalFeedback > 1 && 
              <Statistics
              styles={{ listStyle: "none" }}
              goodRate={goodFeedback}
              neutralRate={neutralFeedback}
              badRate={badFeedback}
              total={totalFeedback}
              positiveFeedback={positiveFeedback}
            />}
    </>
  );
};

export default FeedbackStatistics;
//update