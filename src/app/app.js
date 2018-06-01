import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Container = styled.div`
  border: 1px solid lightcoral;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  grid-column: 1 / 3;
  background-color: goldenrod;
  height: 150px;
`;

const Nav = styled.div`
  width: 300px;
  background-color: lightgoldenrodyellow;
`;

const Puzzle = styled.div`
  display: grid;
  grid-template-areas:
    'l row colum'
    'l el colum'
    'l el colum';
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  width: 100%;
`;

const Row = Container.extend`
  background-color: lightcoral;
  grid-area: row;
`;

const ColumLarge = Container.extend`
  background-color: lightgreen;
  grid-area: colum;
`;

const Colum = Container.extend`
  background-color: lightpink;
  grid-area: l;
`;

const Element = Container.extend`
  background-color: lightgray;
  grid-area: el;
`;

const Element2 = Container.extend`
  background-color: lightseagreen;
  grid-area: el2;
`;

export const App = () => (
  <Grid>
    <Header />
    <Nav />
    <Container>
      <Puzzle>
        <Row />
        <Colum />
        <ColumLarge />
        <Element />
        <Element2 />
      </Puzzle>
    </Container>
  </Grid>
);
