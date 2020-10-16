import React from 'react';
import Animated from 'components/Animated';
import style from './Curtain.scss';
import PropTypes from 'prop-types';

const Curtain = ({ isLoading, amount }) => {
  const renderColumns = React.useMemo(() => {
    return [...new Array(amount).keys()].map(index => (
      <div key={index} className={style.column}>
        <Animated
          className={style.columnShirmaWrapper}
          isVisible={!isLoading}
          duration={{
            in: 0,
            out: 1000,
          }}
          delay={{
            in: 0,
            out: index * 100 + 900,
          }}
          animationIn="slideInUp"
          animationOut="slideOutUp"
        >
          <div className={style.shirma} />
        </Animated>
      </div>
    ));
  }, [isLoading, amount]);

  return <div className={style.shirmaWrapper}>{renderColumns}</div>;
};

Curtain.propTypes = {
  isLoading: PropTypes.bool,
  amount: PropTypes.number,
};

Curtain.defaultProps = {
  isLoading: true,
  amount: 0,
};

export default React.memo(Curtain);
