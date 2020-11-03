import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Weypoint from 'components/Weypoint';
import Animated from 'components/Animated';

class WaypointAnimate extends PureComponent {
  state = { isVisible: false };

  componentDidMount() {
    setTimeout(() => {
      this.ok = true;
    }, 2000);
  }

  _handleWaypointEnter = () => {
    if (!this.state.isVisible) {
      window.requestAnimationFrame(() => {
        if (process.env.APP_ENV === 'development' && this.ok) {
          this.setState({ isVisible: true });
        }
        if (process.env.APP_ENV !== 'development') {
          this.setState({ isVisible: true });
        }
      });
    }
  };

  render() {
    const { isVisible } = this.state;
    const {
      children,
      bottomOffset,
      style,
      className,
      hardHidden,
      horizontal,
      disableAncestor,
      animatedClassName,
      ...otherProps
    } = this.props;

    return (
      <Weypoint
        className={className}
        bottomOffset={bottomOffset}
        onEnter={this._handleWaypointEnter}
      >
        {typeof children === 'function' ? (
          children(isVisible)
        ) : (
          <Animated
            {...otherProps}
            className={animatedClassName}
            isVisible={isVisible}
          >
            {children}
          </Animated>
        )}
      </Weypoint>
    );
  }
}

WaypointAnimate.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
  bottomOffset: PropTypes.string,
  className: PropTypes.string,
  animatedClassName: PropTypes.string,
  hardHidden: PropTypes.bool,
  horizontal: PropTypes.bool,
  isVisible: PropTypes.bool,
  disableAncestor: PropTypes.bool,
};

WaypointAnimate.defaultProps = {
  bottomOffset: '30%',
  style: {},
  className: '',
  animatedClassName: '',
  hardHidden: false,
  horizontal: true,
  isVisible: false,
  disableAncestor: false,
};

export default WaypointAnimate;
