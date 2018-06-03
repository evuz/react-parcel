import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tabs = styled.div`
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

export default Tabs;
