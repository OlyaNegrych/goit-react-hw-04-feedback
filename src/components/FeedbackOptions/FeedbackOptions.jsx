import PropTypes from 'prop-types';
import React from 'react';
import { FeedbackOptionBtn } from '../FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    options.map(option => {
      return (
          <FeedbackOptionBtn
            key={option}
            type="button"
            data-action={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </FeedbackOptionBtn>
      );
    })
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};