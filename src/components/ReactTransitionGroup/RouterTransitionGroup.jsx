import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Wrapper from 'components/Wrapper';
import Curtain from 'components/Curtain';
import classnames from 'classnames';
import style from './RouterTransitionGroup.scss';

// import CurentRoute from 'components/CurentRoute';
import isVisible from './utils/isVisible';
import { timeoutsShape } from './utils/propTypes';

@withRouter
class ReactTransitionGroup extends React.PureComponent {
  render() {
    const { routes, timeout, location } = this.props;

    return (
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="route"
          timeout={timeout}
        >
          {status => (
            <>
              <Switch location={location} key={location.pathname}>
                {routes.map(({ path, exact, component: Component, title }) => (
                  <Route
                    key={path}
                    exact={exact}
                    path={path}
                    render={props => (
                      <>
                        <Wrapper
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
                        <Curtain
                          className={classnames(style.curtain, 'route-exit')}
                          curtainClassName={style.curtainColumn}
                          amount={3}
                          isLoading={isVisible(status)}
                          duration={{ in: 0, out: 700 }}
                          delayCurtain={{ in: 1000, out: 300 }}
                          animation="slideInUpCurtain"
                        />
                      </>
                    )}
                  />
                ))}
              </Switch>
            </>
          )}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

ReactTransitionGroup.propTypes = {
  location: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  timeout: timeoutsShape.isRequired,
};

export default ReactTransitionGroup;
