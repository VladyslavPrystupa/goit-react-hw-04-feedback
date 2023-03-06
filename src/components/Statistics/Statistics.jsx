import PropTypes from 'prop-types';
import { StatsList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsList>
      <li>Good: {good} </li>
      <li>Neutral: {neutral} </li>
      <li>Bad: {bad}</li>
      <li>Tolal: {total()}</li>
      <li>Positive feedback: {positivePercentage()}% </li>
    </StatsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
