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
import { Context } from '../Context';

const Pagination = ({ config }) => {
  const { state, dispatch } = React.useContext(Context);

  const nextSlide = React.useCallback(() => {
    dispatch({ active: state.active + 1 });
  }, [dispatch, state]);

  const prevSlide = React.useCallback(() => {
    dispatch({ active: state.active - 1 });
  }, [state, dispatch]);

  const renderSlideCounter = React.useMemo(() => {
    return state.active + 1 + '/' + config.cases.length;
  }, [state, config]);

  return (
    <>
      <Animated
        className={style.arrows}
        isVisible={config.loading}
        delay={{ in: 300, out: 1000 }}
        duration={{ in: 600, out: 300 }}
      >
        <div className={style.butonsWrapper}>
          <Button
            direction="prev"
            imgSrc={arrowLeft}
            onClick={prevSlide}
            className={classnames({
              [style.hideButton]: state.active === 0,
            })}
          />
          <Button
            direction="next"
            imgSrc={arrowRight}
            onClick={nextSlide}
            className={classnames({
              [style.hideButton]: state.active === config.cases.length - 1,
            })}
          />
        </div>
      </Animated>
      <Animated
        className={style.slideCount}
        isVisible={config.loading}
        delay={{ in: 300, out: 1000 }}
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
