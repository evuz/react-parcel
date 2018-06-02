import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Header = styled.div`
  width: 100%;
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

Header.propTypes = {
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Header.defaultProps = {
  height: '56px',
  backgroundColor: 'lightgray',
};
