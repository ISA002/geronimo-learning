import React from 'react';
import Text from 'components/Text';
import style from './Column.scss';
import PropTypes from 'prop-types';
import Animated from 'components/Animated';
import Button from 'components/Button';
import { homeColumnData } from 'constants/index';

const Column = ({ index, isLoading, title, image, gif }) => {
  const renderMenu = React.useMemo(() => {
    return homeColumnData.map(item => (
      <Button key={item.id} to={item.to}>
        <Text
          className={style.menuButton}
          size="20"
          color="main-white"
          fontWeight="bold"
        >
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
        className={style.columnShirmaWrapper}
        // animateOnMount
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
      <img className={style.columnImage} src={image} alt="pict" />
      <img className={style.columnGif} src={gif} alt="gif" />
      <Animated
        className={style.columnTextWrapper}
        // animateOnMount
        isVisible={isLoading}
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
  index: PropTypes.number,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  image: PropTypes.string,
  gif: PropTypes.string,
};

Column.defaultProps = {
  index: 0,
  isLoading: true,
  title: '',
  image: '',
  gif: '',
};

export default React.memo(Column);
