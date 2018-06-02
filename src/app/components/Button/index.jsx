import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Button = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: 'transparent',
};
