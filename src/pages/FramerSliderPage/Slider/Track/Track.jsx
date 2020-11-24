import React from 'react';
import { motion, useElementScroll } from 'framer-motion';
import classnames from 'classnames';
import style from './Track.scss';
import PropTypes from 'prop-types';
import Slide from './Slide';
import { Context } from '../Context';
import debounce from 'lodash/debounce';

const Track = ({ config, slideWidth }) => {
  const sliderListRef = React.useRef();
  const { scrollX } = useElementScroll(sliderListRef);
  const { state, dispatch } = React.useContext(Context);
  const [x, setX] = React.useState(0);
  const prevX = React.useRef();

  const onDragEnd = (_, info) => {
    console.log(info);
    console.log(scrollX);
  };

  const handleNewActiveSlide = React.useCallback(
    debounce(value => {
      const prevActive = Math.round(slideWidth * state.active);

      if (value !== prevActive) {
        const otherActive = Math.round(value / slideWidth);

        dispatch({ active: otherActive });
      }
    }, 100),
    [dispatch, state, slideWidth]
  );

  scrollX.onChange(value => setX(value));

  React.useEffect(() => {
    if (prevX.current !== x) {
      handleNewActiveSlide(x);
      prevX.current = x;
    }
  }, [x, handleNewActiveSlide, prevX]);

  const renderSlides = React.useMemo(() => {
    return config.cases.map((item, index) => {
      return (
        <Slide
          className={classnames(style.slide, config.slide)}
          key={item.id}
          loading={config.loading}
          item={item}
          index={index}
        />
      );
    });
  }, [config]);

  return (
    <>
      <motion.div
        ref={sliderListRef}
        onDragEnd={onDragEnd}
        className={classnames(style.slideList, config.sliderList)}
      >
        <div className={style.scroller}>{renderSlides}</div>
      </motion.div>
    </>
  );
};

Track.propTypes = {
  config: PropTypes.object,
  slideWidth: PropTypes.number.isRequired,
};

Track.defaultProps = {
  config: {},
};

export default React.memo(Track);
