import React from 'react';
import style from './FramerSliderPage.scss';
import Header from 'components/Header';
import Slider from './Slider';
import { useSelector } from 'react-redux';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import { filmPageDataSelector } from 'models/info/selectors';
import PropTypes from 'prop-types';
import { changeAnimationSelector } from 'models/common/selectors';

const FramerSliderPage = ({ isLoaded }) => {
  const [isLoadedState, setIsLoadedState] = React.useState(false);
  const collection = useSelector(filmPageDataSelector);
  const loading = useSelector(loadingFinishedSelector);
  const isUnstandartPageTransition = useSelector(changeAnimationSelector);

  const sliderConfig = React.useMemo(
    () => ({
      sliderList: style.sliderList,
      slide: style.slide,
      loading:
        loading && (isUnstandartPageTransition ? isLoaded : isLoadedState),
      cases: collection.show_category.cases,
    }),
    [loading, collection, isLoadedState, isLoaded, isUnstandartPageTransition]
  );

  React.useEffect(() => {
    if (isLoaded) {
      setIsLoadedState(true);
    }
  }, [isLoaded]);

  return (
    <>
      <div className={style.root}>
        <Header loading={sliderConfig.loading} />
        <Slider config={sliderConfig} className={style.slider} />
      </div>
    </>
  );
};

FramerSliderPage.propTypes = {
  isLoaded: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([undefined])]),
};

FramerSliderPage.defaultProps = {
  isLoaded: undefined,
};

export default React.memo(FramerSliderPage);
