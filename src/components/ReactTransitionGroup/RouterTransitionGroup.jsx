import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Wrapper from 'components/Wrapper';

// import CurentRoute from 'components/CurentRoute';
import isVisible from './utils/isVisible';
import { timeoutsShape } from './utils/propTypes';

const ReactTransitionGroup = ({ routes, timeout, location }) => {
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        classNames="route"
        timeout={timeout}
      >
        {status => (
          <Switch location={location} key={location.pathname}>
            {routes.map(({ path, exact, component: Component, title }) => (
              <Route
                key={path}
                exact={exact}
                path={path}
                render={props => (
                  <Wrapper
                    location={location.pathname}
                    title={title}
                    isVisiblePage={isVisible(status)}
                  >
                    <Component
                      transitionStatus={status}
                      isVisiblePage={isVisible(status)}
                      title={title}
                      {...props}
                    />
                  </Wrapper>
                )}
              />
            ))}
          </Switch>
        )}
      </CSSTransition>
    </TransitionGroup>
  );
};

ReactTransitionGroup.propTypes = {
  location: PropTypes.any,
  routes: PropTypes.array.isRequired,
  timeout: timeoutsShape.isRequired,
};

ReactTransitionGroup.defaultProps = {
  location: undefined,
};

export default React.memo(withRouter(ReactTransitionGroup));
