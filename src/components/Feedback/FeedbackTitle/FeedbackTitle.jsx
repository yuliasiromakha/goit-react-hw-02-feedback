import React from "react";
import PropTypes from 'prop-types';

const FeedbackTitle = ({title, style}) => {
    return (
        <h1 style={style} >{title}</h1>
    );
};

FeedbackTitle.propTypes = {
    title: PropTypes.string.isRequired,
}

export default FeedbackTitle;