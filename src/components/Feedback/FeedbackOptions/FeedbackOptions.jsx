import React from "react";
import './FeedbackOptions.css'

const FeedbackOptions = ({addReview, options }) => {
    return(
        <div className="rate__block">
          {options.map(name => (
        <button
          className="rate__button"
          type="button"
          key={name}
          onClick={() => addReview(name)}>{name} </button>))}
        </div>
    )}

export default FeedbackOptions;