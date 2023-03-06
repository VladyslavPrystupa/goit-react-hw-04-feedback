import { BtnList } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map((btnName, index) => {
        return (
          <li key={index}>
            <button type="button" value={btnName} onClick={onLeaveFeedback}>
              {btnName}
            </button>
          </li>
        );
      })}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
