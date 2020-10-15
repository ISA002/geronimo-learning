import React from 'react';
import Animated from 'components/Animated';
import style from './Shirma.scss';
import PropTypes from 'prop-types';

const Shirma = ({ isLoading }) => {
  const renderColumns = React.useMemo(() => {
    return [0, 1, 2].map(index => (
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
  }, [isLoading]);

  return <div className={style.shirmaWrapper}>{renderColumns}</div>;
};

Shirma.propTypes = {
  isLoading: PropTypes.bool,
};

Shirma.defaultProps = {
  isLoading: true,
};

export default React.memo(Shirma);
