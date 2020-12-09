import React from 'react';
import style from './FramerSliderPage.scss';
import Header from 'components/Header';
import Slider from './Slider';
import { useSelector } from 'react-redux';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import { filmCasesSelector } from 'models/info/selectors';
import PropTypes from 'prop-types';
import { toDetailSelector } from 'models/common/selectors';

const FramerSliderPage = ({ isLoaded }) => {
  const [isLoadedState, setIsLoadedState] = React.useState(false);
  const cases = useSelector(filmCasesSelector);
  const preloaderloading = useSelector(loadingFinishedSelector);
  const toDetail = useSelector(toDetailSelector);

  const sliderLoading = React.useMemo(() => {
    return preloaderloading && (toDetail ? isLoaded : isLoadedState);
  }, [preloaderloading, isLoadedState, isLoaded, toDetail]);

  React.useEffect(() => {
    if (isLoaded) {
      setIsLoadedState(true);
    }
  }, [isLoaded]);

  return (
    <>
      <div className={style.root}>
        <Header loading={sliderLoading} />
        <Slider
          sliderList={style.sliderList}
          slide={style.slide}
          cases={cases}
          loading={sliderLoading}
          className={style.slider}
        />
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
