import React from 'react';
import style from './PubPage.scss';
import Grid from './Grid';
import { useSelector } from 'react-redux';
import { pubPageDataSelector } from 'models/info/selectors';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import viewport from 'hocs/viewport';
import PropTypes from 'prop-types';
import Header from 'components/Header';

const PubPage = ({ isMobile, isDesktop, isTablet }) => {
  const collection = useSelector(pubPageDataSelector);
  const loading = useSelector(loadingFinishedSelector);

  const amountColumns = React.useMemo(() => {
    if (isMobile) return 2;
    if (isTablet) return 3;
    if (isDesktop) return 4;
    return null;
  }, [isMobile, isDesktop, isTablet]);

  return (
    <div className={style.root}>
      <Header loading={loading} />
      <Grid
        columns={amountColumns}
        collection={collection.show_category.cases}
      />
    </div>
  );
};

PubPage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
};

export default React.memo(viewport(PubPage));
