import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import isVisible from './utils/isVisible';
import { timeoutsShape, classNamesShape } from './utils/propTypes';

const ReactTransitionGroup = ({
  transitionKey,
  classNames,
  timeout,
  children,
  onEnter,
  onExit,
  onExited,
  onEntered,
}) => (
  <TransitionGroup component={null}>
    <CSSTransition
      key={transitionKey}
      classNames={classNames}
      timeout={timeout}
      onEnter={onEnter}
      onExit={onExit}
      onExited={onExited}
      onEntered={onEntered}
    >
      {status => {
        if (typeof children === 'function') {
          return children({
            transitionStatus: status,
            isVisible: isVisible(status),
          });
        }

        return React.cloneElement(children, {
          transitionStatus: status,
          isVisible: isVisible(status),
        });
      }}
    </CSSTransition>
  </TransitionGroup>
);

ReactTransitionGroup.propTypes = {
  transitionKey: PropTypes.any.isRequired,
  timeout: timeoutsShape.isRequired,
  classNames: classNamesShape,
  onExit: PropTypes.func,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  onEntered: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

ReactTransitionGroup.defaultProps = {
  classNames: 'reactTransitionGroup',
  onExit: () => {},
  onEnter: () => {},
  onExited: () => {},
  onEntered: () => {},
};

export default ReactTransitionGroup;
