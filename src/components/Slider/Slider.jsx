/* eslint-disable no-return-assign */
/* eslint-disable prefer-template */
import React from 'react';
import style from './Slider.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Swipeable } from 'react-swipeable';
import gsap from 'gsap';
import Text from 'components/Text';
import { debounce } from 'lodash';
import Animated from 'components/Animated';
import Button from './Button';
import arrowLeft from 'images/arrowLeft.svg';
import arrowRight from 'images/arrowRight.svg';
import Slide from './Slide';

const configSwipeable = {
  delta: 10,
  preventDefaultTouchmoveEvent: false,
  trackTouch: true,
  trackMouse: true,
  rotationAngle: 0,
};

const debounceDelay = 100;

const Slider = props => {
  const { className, config = {} } = props;
  const [slideWidth, setSlideWidth] = React.useState(0);
  const swipeableRef = React.useRef(null);
  const [changingSlide, setChangingSlide] = React.useState(false);

  const [sliderState, setSliderState] = React.useState({
    active: 0,
  });

  React.useEffect(() => {
    setSlideWidth(Math.round(window.innerWidth * 0.68));
  }, []);

  React.useEffect(() => {
    gsap.to(swipeableRef.current, {
      duration: 0.8,
      scrollLeft: Math.round(slideWidth * sliderState.active),
      ease: 'power1',
    });
  }, [swipeableRef, slideWidth, sliderState]);

  const handleSwiping = React.useCallback(
    ({ deltaX }) => {
      swipeableRef.current.scrollLeft =
        Math.round(slideWidth * sliderState.active) + deltaX;
    },
    [sliderState, slideWidth]
  );

  const handleNewActiveSlide = React.useCallback(() => {
    const prevActive = Math.round(slideWidth * sliderState.active);

    if (swipeableRef.current.scrollLeft !== prevActive) {
      const otherActive = Math.round(
        swipeableRef.current.scrollLeft / slideWidth
      );
      setSliderState({
        ...sliderState,
        active: otherActive,
      });
    }
  }, [swipeableRef, sliderState, slideWidth]);

  const scrollValueHandler = debounce(
    React.useCallback(() => {
      handleNewActiveSlide();
    }, [handleNewActiveSlide]),
    debounceDelay
  );

  React.useEffect(() => {
    const ref = swipeableRef.current;
    ref.addEventListener('scroll', scrollValueHandler, { passive: true });

    return () => {
      ref.removeEventListener('scroll', scrollValueHandler);
    };
  }, [swipeableRef, scrollValueHandler]);

  const nextSlide = React.useCallback(() => {
    if (!changingSlide) {
      setSliderState({
        ...sliderState,
        active: sliderState.active + 1,
      });
      setChangingSlide(true);
      setTimeout(() => setChangingSlide(false), 900);
    }
  }, [sliderState, setSliderState, changingSlide]);

  const prevSlide = React.useCallback(() => {
    if (!changingSlide) {
      setSliderState({
        ...sliderState,
        active: sliderState.active - 1,
      });
      setChangingSlide(true);
      setTimeout(() => setChangingSlide(false), 900);
    }
  }, [sliderState, setSliderState, changingSlide]);

  const renderSlides = React.useMemo(() => {
    return config.cases.map((item, index) => {
      return (
        <Slide
          className={classnames(style.slide, config.slide)}
          key={item.id}
          loading={config.loading}
          sliderState={sliderState}
          item={item}
          index={index}
        />
      );
    });
  }, [config, sliderState]);

  const renderSlideCounter = React.useMemo(() => {
    return sliderState.active + 1 + '/' + config.cases.length;
  }, [sliderState, config]);

  return (
    <div className={classnames(style.root, className)}>
      <Swipeable
        onSwiping={handleSwiping}
        className={classnames(style.slideList, config.sliderList)}
        {...configSwipeable}
        innerRef={ref => (swipeableRef.current = ref)}
      >
        <div className={style.scroller}>{renderSlides}</div>
      </Swipeable>
      <Animated
        className={style.arrows}
        isVisible={config.loading}
        delay={{ in: 300, out: 300 }}
        duration={{ in: 600, out: 300 }}
      >
        <div className={style.butonsWrapper}>
          <Button
            direction="prev"
            imgSrc={arrowLeft}
            onClick={prevSlide}
            className={classnames({
              [style.hideButton]: sliderState.active === 0,
            })}
          />
          <Button
            direction="next"
            imgSrc={arrowRight}
            onClick={nextSlide}
            className={classnames({
              [style.hideButton]:
                sliderState.active === config.cases.length - 1,
            })}
          />
        </div>
      </Animated>
      <Animated
        className={style.slideCount}
        isVisible={config.loading}
        delay={{ in: 300, out: 300 }}
        duration={{ in: 600, out: 300 }}
      >
        <Text
          fontWeight="bold"
          fontType="BebasNeueBold"
          size="25"
          color="main-white"
        >
          {renderSlideCounter}
        </Text>
      </Animated>
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  config: PropTypes.any,
};

Slider.defaultProps = {
  className: '',
  config: {},
};

export default React.memo(Slider);
