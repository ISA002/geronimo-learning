import React from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import classnames from 'classnames';
import style from './Track.scss';
import PropTypes from 'prop-types';
import Slide from './Slide';
import debounce from 'lodash/debounce';
import normalizeWheel from 'normalize-wheel';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'models/common/slice';
import { sliderActiveSelector } from 'models/common/selectors';
import { Context } from '../Context';

const Track = ({ config, slideWidth }) => {
  const sliderListRef = React.useRef();
  const dispatchToStore = useDispatch();
  const activeSlide = useSelector(sliderActiveSelector);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const firstRender = React.useRef(false);
  const { setState } = React.useContext(Context);

  const onOffsetEnd = React.useCallback(
    active => {
      controls.start({
        transition: {
          duration: 1.3,
          ease: [0.1, 0.25, 0.55, 1],
        },
        x: -slideWidth * active,
      });
    },
    [controls, slideWidth]
  );

  React.useEffect(() => {
    setState(s => ({ ...s, onOffsetEnd }));
  }, [onOffsetEnd, setState]);

  React.useEffect(() => {
    if (!firstRender.current && slideWidth !== 0) {
      onOffsetEnd(activeSlide);
      firstRender.current = true;
    }
  }, [firstRender, activeSlide, onOffsetEnd, slideWidth]);

  const maxLenght = React.useMemo(() => {
    return slideWidth * (config.cases.length - 1);
  }, [slideWidth, config]);

  const handleNewActiveSlide = React.useCallback(
    debounce(value => {
      const prevActive = Math.round(slideWidth * activeSlide);

      if (value !== prevActive) {
        const otherActive = Math.round(value / slideWidth);

        dispatchToStore({
          type: actions.setActiveSliderSlide,
          active: otherActive,
        });
        onOffsetEnd(otherActive);
      }
    }, 100),
    [dispatchToStore, slideWidth, maxLenght, activeSlide]
  );

  const onDrag = React.useCallback(
    (_, info) => {
      x.set(x.get() + info.delta.x);
      handleNewActiveSlide(Math.abs(x.get()));
    },
    [x, handleNewActiveSlide]
  );

  React.useEffect(() => {
    const ref = sliderListRef.current;

    const writeWheelValue = e => {
      const value = normalizeWheel(e);

      x.set(x.get() - value.pixelX);
      if (x.get() > 0) {
        x.set(0);
      }
      if (x.get() < -slideWidth * (config.cases.length - 1)) {
        x.set(-slideWidth * (config.cases.length - 1));
      }
      handleNewActiveSlide(-x.get());
    };

    ref.addEventListener('wheel', writeWheelValue, { passive: true });

    return () => {
      ref.removeEventListener('wheel', writeWheelValue);
    };
  }, [sliderListRef, x, handleNewActiveSlide, slideWidth, config]);

  const onDragEnd = React.useCallback(() => {
    onOffsetEnd(activeSlide);
  }, [activeSlide, onOffsetEnd]);

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
        className={classnames(style.slideList, config.sliderList)}
      >
        <motion.div
          animate={controls}
          style={{ x }}
          onDragEnd={onDragEnd}
          onDrag={onDrag}
          className={style.scroller}
          drag="x"
          dragConstraints={{ left: -maxLenght, right: 0 }}
        >
          {renderSlides}
        </motion.div>
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
