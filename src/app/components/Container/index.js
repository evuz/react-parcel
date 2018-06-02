import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
  width: 100%;
  min-height: 200vh;
  background: linear-gradient(lightgreen, lightsalmon);
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

Container.propTypes = {
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
};

Container.defaultProps = {
  marginTop: '56px',
  marginBottom: '0px',
};
