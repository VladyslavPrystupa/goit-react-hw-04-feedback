import { Header, Wrapper } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
