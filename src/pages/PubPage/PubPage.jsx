import React from 'react';
import style from './PubPage.scss';
import Grid from './Grid';
import { useSelector } from 'react-redux';
import { pubCasesSelector } from 'models/info/selectors';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import viewport from 'hocs/viewport';
import PropTypes from 'prop-types';
import Header from 'components/Header';

const PubPage = ({ isDesktop, isTablet, isMediumDesktop, isLargeDesktop }) => {
  const cases = useSelector(pubCasesSelector);
  const loading = useSelector(loadingFinishedSelector);

  const amountColumns = React.useMemo(() => {
    if (isTablet) return 2;
    if (isDesktop) return 3;
    if (isMediumDesktop) return 4;
    if (isLargeDesktop) return 5;
    return null;
  }, [isDesktop, isTablet, isMediumDesktop, isLargeDesktop]);

  return (
    <div className={style.root}>
      <Header loading={loading} />
      <Grid columns={amountColumns} collection={cases} />
    </div>
  );
};

PubPage.propTypes = {
  isMediumDesktop: PropTypes.bool.isRequired,
  isLargeDesktop: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
};

export default React.memo(viewport(PubPage));
