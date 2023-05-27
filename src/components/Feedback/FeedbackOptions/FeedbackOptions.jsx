import React from "react";
import './FeedbackOptions.css'

const FeedbackOptions = ({ addGoodReview, addNeutralReview, addBadReview}) => {
    return(
        <div className="rate__block">
        <button className="rate__button" type="button" onClick={addGoodReview}>
          Good
        </button>
        <button className="rate__button" type="button" onClick={addNeutralReview}>
          Neutral
        </button>
        <button className="rate__button" type="button" onClick={addBadReview}>
          Bad
        </button>

      </div>
    )
}

export default FeedbackOptions;