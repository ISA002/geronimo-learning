import React, { Fragment } from 'react';
import Column from './Column';
import style from './Home.scss';
import Text from 'components/Text';
import { homePageData } from 'constants/index.js';

const Home = () => {
  const renderColumns = React.useMemo(() => {
    return homePageData.map((item, index) => (
      <Column index={index} key={item.id} data={item} />
    ));
  }, []);

  return (
    <Fragment>
      <div className={style.mainTextRoot}>
        <Text className={style.mainText} size="100" color="main-white">
          GERONIMO
        </Text>
      </div>
      <div className={style.root}>{renderColumns}</div>
    </Fragment>
  );
};

export default Home;
