import styled from 'styled-components';

export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

export const MenuComponent = styled.div`
  height: 100%;
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: margin-left ${({ animationTime }) => animationTime}ms;
  &.slide-in-appear {
    margin-left: ${({ width }) => `-${width}`};
    &.slide-in-appear-active {
      margin-left: 0;
    }
  }
  &.slide-in-leave {
    margin-left: 0;
    &.slide-in-leave-active {
      margin-left: ${({ width }) => `-${width}`};
    }
  }
`;
