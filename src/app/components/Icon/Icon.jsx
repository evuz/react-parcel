import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const I = styled.div`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
`;

const Icon = ({ icon, ...props }) => {
  const iconClass = `fas fa-${icon}`;
  return <I className={iconClass} {...props} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 'inherit',
  color: 'black',
};

export default Icon;
