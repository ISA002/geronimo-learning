import React from 'react';
import Animated from 'components/Animated';
import style from './Shirma.scss';
import PropTypes from 'prop-types';

// TODO  Переименовать компонент

/*
твоя ширма заем то мапит масив из трех элементов,
если вдруг количество колонок измениться, тебе прдется руками фиксить этот цикл
В идеале нужно передать в компонет количество колонок, и делать цикл от 0 до collection.length
https://monosnap.com/file/L8eLa0jN6IT921IPhPrYhX8FEJQjQr - выглядить будет примерно так
*/
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
