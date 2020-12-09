/* import { Helmet } from 'react-helmet'; */
import React from 'react';
import PropTypes from 'prop-types';
import { RouterTransitionGroup } from 'components/ReactTransitionGroup';
import 'styles/normalize.scss';
import 'styles/fonts.scss';
import 'styles/common.scss';
import styles from './App.scss';
import useBrowser from 'hooks/useBrowser';
import MediaHelper from 'components/MediaHelper';
import Preloader from 'components/Preloader';
import { useSelector, useDispatch } from 'react-redux';
import { PAGE_TRANSITION } from 'constants';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import { useLocation } from 'react-router-dom';
import { actions } from 'models/common/slice';

const App = ({ routes }) => {
  const browser = useBrowser();
  const loading = useSelector(loadingFinishedSelector);
  const pageWrapper = React.useRef();
  const location = useLocation();
  const dispatch = useDispatch();
  const firstRender = React.useRef(false);
  const prevLocation = React.useRef();

  if (RUNTIME_ENV === 'client') {
    console.info('browser', browser);
  }

  React.useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      dispatch({ type: actions.setUrl, url: location.pathname });
      prevLocation.current = location.pathname;
    }
  }, [dispatch, location, prevLocation]);

  React.useEffect(() => {
    if (!firstRender.current) {
      const contentCurtain = document.getElementById('content-curtain');
      firstRender.current = true;

      document.addEventListener('DOMContentLoaded', () => {
        contentCurtain.parentNode.removeChild(contentCurtain);
      });
    }
  }, [firstRender]);

  return (
    <div className={styles.app} ref={pageWrapper}>
      {/* Use Helmet only in SPA mode. Render app head on server side  */}
      {/* <Helmet {...config.app} /> */}
      <MediaHelper />
      {!loading && <Preloader />}
      <RouterTransitionGroup timeout={PAGE_TRANSITION} routes={routes} />
    </div>
  );
};

App.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default React.memo(App);
