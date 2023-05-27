import React from 'react';
import FeedbackTitle from './Feedback/FeedbackTitle/FeedbackTitle';
import FeedbackStatistics from './Feedback/FeedbackStatistics';

export const App = () => {
  return (

    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        fontSize: 26,
      }}
    >

    <FeedbackTitle title='Please leave feedback'style={{marginLeft: 30}}/>

    <FeedbackStatistics/>
    
    </div>
  );
};
