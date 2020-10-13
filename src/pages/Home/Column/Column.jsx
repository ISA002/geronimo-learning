import React from 'react';
import Text from 'components/Text';
import style from './Column.scss';
import PropTypes from 'prop-types';
import Animated from 'components/Animated';
import Button from 'components/Button';
import { homeColumnData } from 'constants/index';

const Column = ({ data: { title, image }, index }) => {
  const renderMenu = React.useMemo(() => {
    return homeColumnData.map(item => (
      <Button key={item.id} to={item.to}>
        <Text className={style.menuButton} size="20" color="main-white">
          {item.title}
        </Text>
      </Button>
    ));
  }, []);

  return (
    <div className={style.root}>
      {index === 2 && (
        <div className={style.menuWrapper}>
          <div className={style.menu}>{renderMenu}</div>
        </div>
      )}
      <Animated
        className={style.columnImageWrapper}
        animateOnMount
        // isVisible={false}
        duration={{
          in: 1200,
          out: 500,
        }}
        delay={{
          in: index * 100 + 900,
          out: 300,
        }}
        animationIn="slideOutUp"
        animationOut="slideInUp"
      >
        <div className={style.shirma} />
      </Animated>
      <img className={style.columnImage} src={image} alt="pict" />
      <Animated
        className={style.columnTextWrapper}
        animateOnMount
        duration={{
          in: 600,
          out: 200,
        }}
        delay={{
          in: index * 50 + 400,
          out: 300,
        }}
        animationIn="fadeInUpSmall"
      >
        <Text className={style.columnText} size="42" color="main-white">
          {title}
        </Text>
      </Animated>
    </div>
  );
};

Column.propTypes = {
  data: PropTypes.any,
  index: PropTypes.number,
};

Column.defaultProps = {
  data: {},
  index: 0,
};

export default React.memo(Column);
