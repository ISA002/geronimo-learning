import React from 'react';
import style from './FilmPage.scss';
import Slider from 'components/Slider';
import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { filmPageDataSelector } from 'models/info/selectors';
import { loadingFinishedSelector } from 'models/preloader/selectors';

const FilmPage = () => {
  const loading = useSelector(loadingFinishedSelector);
  const collection = useSelector(filmPageDataSelector);

  const sliderConfig = React.useMemo(
    () => ({
      sliderList: style.sliderList,
      slide: style.slide,
      loading,
      cases: collection.show_category.cases,
    }),
    [loading, collection]
  );

  return (
    <div className={style.root}>
      <Header loading={loading} />
      <Slider config={sliderConfig} className={style.slider} />
    </div>
  );
};

export default FilmPage;
