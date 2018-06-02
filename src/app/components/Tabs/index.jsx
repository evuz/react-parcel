import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Tabs = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: lightskyblue;
  height: ${({ height }) => height};
`;

Tabs.propTypes = {
  height: PropTypes.string,
};

Tabs.defaultProps = {
  height: '56px',
};
