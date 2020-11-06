import React from 'react';
import Animated from 'components/Animated';
import style from './Curtain.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Curtain = ({
  isLoading,
  amount,
  curtainClassName,
  duration,
  delayCurtain,
  className,
}) => {
  const [columnWidth, setColumnWidth] = React.useState('34%');

  React.useEffect(() => {
    setColumnWidth(window.innerWidth / amount);
  }, [amount]);

  const renderColumns = React.useMemo(() => {
    const curtains = [];
    for (let index = 0; index < amount; index += 1) {
      curtains.push(
        <div
          key={index}
          style={{ width: columnWidth }}
          className={style.column}
        >
          <Animated
            className={style.columnShirmaWrapper}
            isVisible={!isLoading}
            duration={
              duration || {
                in: 0,
                out: 1000,
              }
            }
            delay={{
              in: 0,
              out: index * 100 + delayCurtain,
            }}
            animationIn="slideInUp"
            animationOut="slideOutUp"
          >
            <div className={classnames(style.shirma, curtainClassName)} />
          </Animated>
        </div>
      );
    }
    return curtains;
  }, [
    isLoading,
    amount,
    columnWidth,
    duration,
    delayCurtain,
    curtainClassName,
  ]);

  return (
    <div className={classnames(style.shirmaWrapper, className)}>
      {renderColumns}
    </div>
  );
};

Curtain.propTypes = {
  isLoading: PropTypes.bool,
  amount: PropTypes.number,
  curtainClassName: PropTypes.string,
  duration: PropTypes.any,
  delayCurtain: PropTypes.number,
  className: PropTypes.string,
};

Curtain.defaultProps = {
  isLoading: true,
  amount: 0,
  curtainClassName: '',
  duration: undefined,
  delayCurtain: 900,
  className: '',
};

export default React.memo(Curtain);
