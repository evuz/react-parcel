import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import { Root, MenuComponent } from './components';

class Menu extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.string,
    animationTime: PropTypes.number,
    backgroundColor: PropTypes.string,
    open: PropTypes.func,
    close: PropTypes.func,
  };

  static defaultProps = {
    width: '70%',
    backgroundColor: 'white',
    animationTime: 700,
    open: () => {},
    close: () => {},
  };

  state = { show: false, leave: false };

  componentWillMount() {
    this.props.open(this.open);
    this.props.close(this.close);
  }

  open = () => {
    this.setState({
      show: true,
    });
  };

  close = () => {
    this.setState({
      leave: true,
    });
    setTimeout(() => {
      this.setState({
        show: false,
        leave: false,
      });
    }, this.props.animationTime);
  };

  handleMenuClick = ev => {
    ev.stopPropagation();
  };

  render() {
    const { children, animationTime, ...props } = this.props;
    const { show, leave } = this.state;
    if (!show) return null;
    return (
      <Root onClick={this.close}>
        <CSSTransitionGroup
          transitionName="slide-in"
          transitionAppear
          transitionEnter={false}
          transitionAppearTimeout={animationTime}
          transitionLeaveTimeout={animationTime}
        >
          {!leave ? (
            <MenuComponent {...props} animationTime={animationTime} onClick={this.handleMenuClick}>
              {children}
            </MenuComponent>
          ) : null}
        </CSSTransitionGroup>
      </Root>
    );
  }
}

export default Menu;