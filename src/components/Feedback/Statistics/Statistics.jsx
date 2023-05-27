import React from "react";

const Statistics = ({goodRate, neutralRate, badRate, total, positiveFeedback, styles}) => {
    return (
        <ul style={styles}>
            <li>Good: {goodRate}</li>
            <li>Neutral: {neutralRate}</li>
            <li>Bad: {badRate}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positiveFeedback}%</li>
        </ul>
    )
}

export default Statistics;