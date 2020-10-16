import React from 'react';
import Animated from 'components/Animated';
import style from './Curtain.scss';
import PropTypes from 'prop-types';

const Curtain = ({ isLoading, amount }) => {
  const [columnWidth, setColumnWidth] = React.useState('34%');

  React.useEffect(() => {
    setColumnWidth(window.innerWidth / amount);
  }, [amount]);

  const renderColumns = React.useMemo(() => {
    const renderArray = [];
    for (let index = 0; index < amount; index += 1) {
      renderArray.push(
        <div
          key={index}
          style={{ width: columnWidth }}
          className={style.column}
        >
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
      );
    }
    return renderArray;
  }, [isLoading, amount, columnWidth]);

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
