import React from 'react';
import PropTypes from 'prop-types';
/* import { Helmet } from 'react-helmet'; */

import AppRouter from 'components/AppRouter';
import 'styles/normalize.scss';
import 'styles/fonts.scss';
import styles from './App.scss';
import useBrowser from 'hooks/useBrowser';
import Preloader from 'components/Preloader';
import { useSelector } from 'react-redux';
import { loadingFinishedSelector } from 'models/preloader/selectors';

const App = ({ routes }) => {
  const browser = useBrowser();

  const loading = useSelector(loadingFinishedSelector);

  if (RUNTIME_ENV === 'client') {
    console.info('browser', browser);
  }

  return (
    <div className={styles.app}>
      {/* Use Helmet only in SPA mode. Render app head on server side  */}
      {/* <Helmet {...config.app} /> */}
      {!loading && <Preloader />}
      <AppRouter routes={routes} />
    </div>
  );
};

App.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default App;
