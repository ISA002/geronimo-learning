import React from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import classnames from 'classnames';
import style from './Track.scss';
import PropTypes from 'prop-types';
import Slide from './Slide';
import { Context } from '../Context';
import debounce from 'lodash/debounce';
import normalizeWheel from 'normalize-wheel';
// import { useDispatch } from 'react-redux';
// import { actions } from 'models/common/slice';

const Track = ({ config, slideWidth }) => {
  const sliderListRef = React.useRef();
  // const dispatchToStore = useDispatch();
  const { state, dispatch: dispatchToContext } = React.useContext(Context);
  const x = useMotionValue(0);
  const controls = useAnimation();

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
    dispatchToContext(s => ({ ...s, onOffsetEnd }));
  }, [dispatchToContext, onOffsetEnd]);

  const maxLenght = React.useMemo(() => {
    return slideWidth * (config.cases.length - 1);
  }, [slideWidth, config]);

  const handleNewActiveSlide = React.useCallback(
    debounce(value => {
      const prevActive = Math.round(slideWidth * state.active);

      if (value !== prevActive) {
        const otherActive = Math.round(value / slideWidth);

        dispatchToContext(s => ({ ...s, active: otherActive }));
        // dispatchToStore({
        //   type: actions.setActiveSliderSlide,
        //   active: otherActive,
        // });
        onOffsetEnd(otherActive);
      }
    }, 100),
    [dispatchToContext, slideWidth, maxLenght]
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
    onOffsetEnd(state.active);
  }, [state, onOffsetEnd]);

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
