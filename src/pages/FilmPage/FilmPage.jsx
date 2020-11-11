import React from 'react';
import style from './FilmPage.scss';
import Slider from 'components/Slider';
import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { filmPageDataSelector } from 'models/info/selectors';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import PropTypes from 'prop-types';

const FilmPage = ({ isLoaded }) => {
  const loading = useSelector(loadingFinishedSelector);
  const collection = useSelector(filmPageDataSelector);

  const [isLoadedState, setIsLoadedState] = React.useState(false);

  React.useEffect(() => {
    if (isLoaded) {
      setIsLoadedState(true);
    }
  }, [isLoaded]);

  const sliderConfig = React.useMemo(
    () => ({
      sliderList: style.sliderList,
      slide: style.slide,
      loading: loading && isLoadedState,
      cases: collection.show_category.cases,
    }),
    [loading, collection, isLoadedState]
  );

  return (
    <div className={style.root}>
      <Header loading={loading && isLoadedState} />
      <Slider config={sliderConfig} className={style.slider} />
    </div>
  );
};

FilmPage.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
};

export default React.memo(FilmPage);
