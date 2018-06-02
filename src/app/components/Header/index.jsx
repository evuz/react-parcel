import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Header = styled.div`
  width: 100%;
  position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
  opacity: 1;
  top: 0;
  left: 0;
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Header.propTypes = {
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  fixed: PropTypes.bool,
};

Header.defaultProps = {
  height: '56px',
  backgroundColor: 'lightgray',
  fixed: false,
};
