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

  if (RUNTIME_ENV === 'client') {
    console.info('browser', browser);
  }

  React.useEffect(() => {
    dispatch({ type: actions.setUrl, url: location.pathname });
  }, [dispatch, location]);

  React.useEffect(() => {
    const contentCurtain = document.getElementById('content-curtain');

    document.addEventListener('DOMContentLoaded', () => {
      contentCurtain.parentNode.removeChild(contentCurtain);
    });
  }, []);

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

export default App;
