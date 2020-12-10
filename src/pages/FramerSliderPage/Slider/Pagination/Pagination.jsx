/* eslint-disable prefer-template */
import React from 'react';
import PropTypes from 'prop-types';
import style from './Pagination.scss';
import Text from 'components/Text';
import Animated from 'components/Animated';
import Button from './Button';
import arrowLeft from 'images/arrowLeft.svg';
import arrowRight from 'images/arrowRight.svg';
import classnames from 'classnames';
import { sliderActiveSelector } from 'models/common/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'models/common/slice';
import { Context } from '../Context';

const Pagination = ({ config }) => {
  const activeSlide = useSelector(sliderActiveSelector);
  const dispatchToStore = useDispatch();
  const { state } = React.useContext(Context);

  const nextSlide = React.useCallback(() => {
    dispatchToStore({
      type: actions.setActiveSliderSlide,
      active: activeSlide + 1,
    });
    state.onOffsetEnd(activeSlide + 1);
  }, [dispatchToStore, activeSlide, state]);

  const prevSlide = React.useCallback(() => {
    dispatchToStore({
      type: actions.setActiveSliderSlide,
      active: activeSlide - 1,
    });
    state.onOffsetEnd(activeSlide - 1);
  }, [activeSlide, dispatchToStore, state]);

  const renderSlideCounter = React.useMemo(() => {
    return activeSlide + 1 + '/' + config.cases.length;
  }, [activeSlide, config]);

  return (
    <>
      <Animated
        className={style.arrows}
        isVisible={config.loading}
        delay={{ in: 300, out: 100 }}
        duration={{ in: 600, out: 100 }}
      >
        <div className={style.butonsWrapper}>
          <Button
            direction="prev"
            imgSrc={arrowLeft}
            onClick={prevSlide}
            className={classnames({
              [style.hideButton]: activeSlide === 0,
            })}
          />
          <Button
            direction="next"
            imgSrc={arrowRight}
            onClick={nextSlide}
            className={classnames({
              [style.hideButton]: activeSlide === config.cases.length - 1,
            })}
          />
        </div>
      </Animated>
      <Animated
        className={style.slideCount}
        isVisible={config.loading}
        delay={{ in: 300, out: 100 }}
        duration={{ in: 600, out: 100 }}
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
    </>
  );
};

Pagination.propTypes = {
  config: PropTypes.object,
};

Pagination.defaultProps = {
  config: {},
};

export default React.memo(Pagination);
