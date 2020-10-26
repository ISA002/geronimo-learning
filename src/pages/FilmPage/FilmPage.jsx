import React from 'react';
import style from './FilmPage.scss';
import Slider from 'components/Slider';
import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { filmPageDataSelector } from 'models/info/selectors';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import Slide from './Slide';

const FilmPage = () => {
  const loading = useSelector(loadingFinishedSelector);
  const collection = useSelector(filmPageDataSelector);

  const [sliderState, setSliderState] = React.useState({
    prev: collection.show_category.cases.length - 1,
    active: 0,
    next: 1,
  });

  const sliderConfig = {
    sliderList: style.sliderList,
    slide: style.slide,
    stateConfig: {
      state: sliderState,
      setState: setSliderState,
    },
    loading,
  };

  const renderSlides = React.useMemo(() => {
    return collection.show_category.cases.map((item, index) => {
      return (
        <Slide
          key={item.id}
          loading={loading}
          sliderState={sliderState}
          item={item}
          index={index}
        />
      );
    });
  }, [collection, sliderState, loading]);

  return (
    <div className={style.root}>
      <Header loading={loading} />
      <Slider config={sliderConfig} className={style.slider}>
        {renderSlides}
      </Slider>
    </div>
  );
};

export default FilmPage;
