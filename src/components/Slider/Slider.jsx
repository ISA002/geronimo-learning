/* eslint-disable no-return-assign */
/* eslint-disable prefer-template */
import React from 'react';
import style from './Slider.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import useSliderState from './useSliderState';
import { Swipeable } from 'react-swipeable';
import gsap from 'gsap';
import Text from 'components/Text';
import _ from 'lodash';
import Animated from 'components/Animated';

const configSwipeable = {
  delta: 10,
  preventDefaultTouchmoveEvent: false,
  trackTouch: true,
  trackMouse: true,
  rotationAngle: 0,
};

const debounceDelay = 100;

const Slider = props => {
  const { className, children, config = {} } = props;
  const [slideWidth, setSlideWidth] = React.useState(0);
  const swipeableRef = React.useRef(null);

  const [sliderState, setSliderState] = useSliderState({
    config,
    children,
  });

  React.useEffect(() => {
    setSlideWidth(
      Math.round(swipeableRef.current.scrollWidth / children.length)
    );
  }, [swipeableRef, children]);

  React.useEffect(() => {
    gsap.to(swipeableRef.current, {
      duration: 0.8,
      scrollLeft: Math.round(
        slideWidth * sliderState.active - 0.25 * slideWidth
      ),
      ease: 'power1',
    });
  }, [swipeableRef, slideWidth, sliderState]);

  const handleSwiped = React.useCallback(
    ({ deltaX }) => {
      let delta = deltaX;
      if (Math.abs(deltaX) > 20) {
        delta = Math.sign(deltaX) * 20;
      }
      swipeableRef.current.scrollLeft += delta;
    },
    [swipeableRef]
  );

  const handle = React.useCallback(() => {
    const neededValue = Math.round(
      slideWidth * sliderState.active - 0.25 * slideWidth
    );

    if (swipeableRef.current.scrollLeft !== neededValue) {
      const otherActive = Math.round(
        swipeableRef.current.scrollLeft / slideWidth
      );
      setSliderState({
        ...sliderState,
        active: otherActive,
        prev: otherActive - 1,
        next: otherActive + 1,
      });
    }
  }, [swipeableRef, sliderState, slideWidth, setSliderState]);

  const setter = _.debounce(
    React.useCallback(() => {
      handle();
    }, [handle]),
    debounceDelay
  );

  React.useEffect(() => {
    const ref = swipeableRef.current;
    ref.addEventListener('scroll', setter, { passive: true });

    return () => {
      ref.removeEventListener('scroll', setter);
    };
  }, [swipeableRef, setter]);

  const nextSlide = React.useCallback(() => {
    const maxIndex = children.length - 1;
    setSliderState({
      ...sliderState,
      active: sliderState.active + 1,
      prev: sliderState.active,
      next: sliderState.active + 1 === maxIndex ? 0 : sliderState.active + 2,
    });
  }, [sliderState, children, setSliderState]);

  const prevSlide = React.useCallback(() => {
    setSliderState({
      ...sliderState,
      active: sliderState.active - 1,
      prev: sliderState.active,
      next: sliderState.active - 1 === 0 ? 0 : sliderState.active - 2,
    });
  }, [sliderState, setSliderState]);

  const _renderSlides = React.useMemo(() => {
    return React.Children.map(children, child => {
      return React.createElement(
        'div',
        {
          className: classnames(style.slide, config.slide),
          key: Math.random(),
        },
        child
      );
    });
  }, [children, config]);

  return (
    <div className={classnames(style.root, className)}>
      <Swipeable
        onSwiping={handleSwiped}
        className={classnames(style.slideList, config.sliderList)}
        {...configSwipeable}
        innerRef={ref => (swipeableRef.current = ref)}
      >
        {_renderSlides}
      </Swipeable>
      <Animated className={style.arrows} isVisible={config.loading}>
        <div className={style.butonsWrapper}>
          <button
            className={classnames({
              [style.hideButton]: sliderState.active === 0,
            })}
            onClick={prevSlide}
            style={{ background: 'white', fontSize: '25px' }}
          >
            prev
          </button>
          <button
            className={classnames({
              [style.hideButton]: sliderState.active === children.length - 1,
            })}
            onClick={nextSlide}
            style={{ background: 'white', fontSize: '25px' }}
          >
            next
          </button>
        </div>
      </Animated>
      <Animated className={style.slideCount} isVisible={config.loading}>
        <Text
          fontWeight="bold"
          fontType="BebasNeueBold"
          size="35"
          color="main-white"
        >
          {sliderState.active + 1 + '/' + children.length}
        </Text>
      </Animated>
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  config: PropTypes.any,
};

Slider.defaultProps = {
  className: '',
  config: {},
};

export default React.memo(Slider);
