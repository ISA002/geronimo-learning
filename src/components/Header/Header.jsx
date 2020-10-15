import React from 'react';
import Button from 'components/Button';
import Text from 'components/Text';
import style from './Header.scss';

/* 

  TODO 
  homeColumnData - не подходящее название, это данные хедера, а у тебя тут какая то колонка в названии
  Назвать как нибудь по понятнее)))
*/
import { homeColumnData } from 'constants/index';

const Header = () => {
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
      <div className={style.menuWrapper}>
        <div className={style.menu}>{renderMenu}</div>
      </div>
    </div>
  );
};

export default Header;
