import React from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import FeedbackTitle from "../FeedbackTitle/FeedbackTitle";
import Notification from "../Notification/Notification";

class FeedbackStatistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addReview = (name) => {
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state 
    const totalFeedback = this.countTotalFeedback();
    const percentage = Math.round((good/totalFeedback) * 100); 

    if (totalFeedback === 0) {
      return 0;
    }

    return percentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
  
    return (
      <>
      <FeedbackOptions addReview={this.addReview} options={Object.keys(this.state)}/>
      
      <FeedbackTitle title='Statistics' style={{
      fontSize: 25,
      marginTop: 30,
      marginLeft: 30,
      }}/>

     {totalFeedback === 0 ?
     (<Notification message='There is no feedback' styles={{marginLeft: 30}}/>)
    : 
    (<Statistics styles={{listStyle: 'none'}} 
      goodRate={good} 
      neutralRate={neutral} 
      badRate={bad} 
      total={totalFeedback}
      positiveFeedback={positiveFeedback}
    />)}

     </>

    );
  }
}

export default FeedbackStatistics;
