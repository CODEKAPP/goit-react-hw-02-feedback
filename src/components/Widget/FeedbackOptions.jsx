import React from 'react';
import PropTypes from 'prop-types';
import { GoodButton, NeutralButton, BadButton } from './Styles/ButtonStyles';
import { DivContainerButtons } from './Styles/DivStyles';
import { StyledH2 } from './Styles/TitleStyles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <StyledH2>Please Leave Feedback</StyledH2>
      {/* {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))} */}

      <DivContainerButtons>
        {options.map(option => (
          <React.Fragment key={option}>
            {option === 'good' && (
              <GoodButton onClick={() => onLeaveFeedback(option)}>
                Good
              </GoodButton>
            )}
            {option === 'neutral' && (
              <NeutralButton onClick={() => onLeaveFeedback(option)}>
                Neutral
              </NeutralButton>
            )}
            {option === 'bad' && (
              <BadButton onClick={() => onLeaveFeedback(option)}>Bad</BadButton>
            )}
          </React.Fragment>
        ))}
      </DivContainerButtons>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
