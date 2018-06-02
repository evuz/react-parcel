import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Header } from './components/Header';
import { Container } from './components/Container';
import { Tabs } from './components/Tabs';

export const App = () => (
  <Fragment>
    <Header />
    <Container marginBottom={'56px'}>My container</Container>
    <Tabs />
  </Fragment>
);
