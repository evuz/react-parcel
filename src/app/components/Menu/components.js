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
  transition: all ${({ animationTime }) => animationTime}ms;
  transition-property: margin-left, margin-right;
  position: absolute;
  ${({ right, width }) => {
    const position = right ? 'right' : 'left';
    return `
        ${position}: 0;
        &.slide-in-appear {
            margin-${position}: -${width};
            &-active {
                margin-${position}: 0;
            }
        }
        &.slide-in-exit {
            margin-${position}: 0;
            &.slide-in-exit-active {
                margin-${position}: -${width};
            }
        }`;
  }};
`;
