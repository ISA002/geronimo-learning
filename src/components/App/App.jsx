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
import { useSelector } from 'react-redux';
import { PAGE_TRANSITION } from 'constants';
import { loadingFinishedSelector } from 'models/preloader/selectors';

const App = ({ routes }) => {
  const browser = useBrowser();
  const loading = useSelector(loadingFinishedSelector);
  const pageWrapper = React.useRef();
  const firstRender = React.useRef(false);

  if (RUNTIME_ENV === 'client') {
    console.info('browser', browser);
  }

  React.useEffect(() => {
    if (!firstRender.current) {
      const contentCurtain = document.getElementById('content-curtain');
      firstRender.current = true;
      // load!!!
      document.addEventListener('DOMContentLoaded', () => {
        contentCurtain.parentNode.removeChild(contentCurtain);
      });
    }
  }, [firstRender]);

  return (
    <div className={styles.app} ref={pageWrapper}>
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
