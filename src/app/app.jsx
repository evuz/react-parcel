import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Header } from './components/Header';
import { Container } from './components/Container';
import { Icon } from './components/Icon';
import { Menu } from './components/Menu';
import { Button } from './components/Button';

const Text = styled.p`
  font-family: sans-serif;
  font-size: 24px;
  text-align: center;
`;

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu
          show
          open={open => {
            this.openMenu = open;
          }}
        >
          <Text>Menu</Text>
        </Menu>
        <Header fixed>
          <Button
            onClick={() => {
              this.openMenu();
            }}
          >
            <Icon icon="bars" size="22px" />
          </Button>
        </Header>
        <Container />
      </Fragment>
    );
  }
}
