import React from 'react';
import Button from 'components/Button';
import Text from 'components/Text';
import style from './Header.scss';
import PropTypes from 'prop-types';
import Animated from 'components/Animated';

import { headerMenuData } from 'constants/index';

const Header = ({ loading }) => {
  const renderMenu = React.useMemo(() => {
    return headerMenuData.map(item => (
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
    <Animated className={style.root} isVisible={loading}>
      <div className={style.menuWrapper}>
        <div className={style.menu}>{renderMenu}</div>
      </div>
    </Animated>
  );
};

Header.propTypes = {
  loading: PropTypes.bool,
};

Header.defaultProps = {
  loading: false,
};

export default React.memo(Header);
