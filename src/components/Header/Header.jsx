import React from 'react';
import Button from 'components/Button';
import Text from 'components/Text';
import style from './Header.scss';

import { headerMenuData } from 'constants/index';

const Header = () => {
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
    <div className={style.root}>
      <div className={style.menuWrapper}>
        <div className={style.menu}>{renderMenu}</div>
      </div>
    </div>
  );
};

export default Header;
