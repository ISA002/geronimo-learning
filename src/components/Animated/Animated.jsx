/* eslint-disable */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { timeShape, easingShape } from './propTypes';
import styles from './Animated.scss';

const getAnimatedState = (props) => {
  const {
    isVisible,
    animationIn,
    animationOut,
    duration,
    easing,
    delay,
  } = props;

  const type = isVisible ? 'in' : 'out';

  return {
    animation: isVisible ? animationIn : animationOut,
    delay: delay instanceof Object ? delay[type] : delay,
    easing: easing instanceof Object ? easing[type] : easing,
    duration: duration instanceof Object ? duration[type] : duration,
  };
};

class Animated extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState){

    if(nextProps.isVisible !== prevState.isVisible){
      return {
        isVisible: nextProps.isVisible,
        ...getAnimatedState(nextProps)
      };
    }

    else return null;
  }

  constructor(props) {
    super(props);
    this.state = props.animateOnMount ? ({
      isVisible: true,
      ...getAnimatedState(props)
    }) : {
      isVisible: false,
    };
  }

  render() {
    const {
      style,
      className,
      children,
      innerRef,
      isVisible: propsIsVisible,
      onClick,
      animationIn,
      animationOut,
      animateOnMount,
      duration: propsDuration,
      easing: propsEase,
      delay: propsDelay,
      ...otherProps
    } = this.props;

    const {
      delay,
      easing,
      duration,
      animation,
      isVisible,
    } = this.state;

    if (style.opacity !== 1) {
      style.opacity = animation ? null : Number(isVisible);
    }

    return (
      <div
        className={classnames(className, styles.animated, styles[animation])}
        onClick={onClick}
        ref={innerRef}
        style={{
          animationDelay: delay ? `${delay}ms` : undefined,
          animationTimingFunction: easing,
          animationDuration: duration ? `${duration}ms` : undefined,
          pointerEvents: isVisible ? 'all' : 'none',
          ...style,
        }}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
}

/* eslint-disable react/no-unused-prop-types */
Animated.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.func,
  style: PropTypes.object,
  isVisible: PropTypes.bool,
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  delay: timeShape,
  duration: timeShape,
  easing: easingShape,
  animateOnMount: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
};
/* eslint-enable */

Animated.defaultProps = {
  style: {},
  isVisible: true,
  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  delay: 0,
  duration: 300,
  easing: 'cubic-bezier(0.03, 0.15, 0.16, 0.99)',
  animateOnMount: false,
};

export default Animated;
