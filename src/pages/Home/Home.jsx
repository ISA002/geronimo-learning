import React, { Fragment } from 'react';
import Column from './Column';
import style from './Home.scss';
import Text from 'components/Text';
import { useSelector } from 'react-redux';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import { collectionSelector } from 'models/info/selectors';
import Header from 'components/Header';
import Curtain from './Curtain';

const Home = () => {
  const loading = useSelector(loadingFinishedSelector);
  const collection = useSelector(collectionSelector);

  const renderColumns = React.useMemo(() => {
    return collection.map((item, index) => (
      <Column
        video={collection[index].preview.video_url}
        images={collection[index].preview.image_urls}
        title={collection[index].title}
        isLoading={loading}
        index={index}
        key={item.id}
      />
    ));
  }, [collection, loading]);

  return (
    <Fragment>
      <Header />
      <div className={style.mainTextRoot}>
        <Text
          fontType="Robotobold"
          className={style.mainText}
          size="160"
          color="main-white"
          fontWeight="bold"
        >
          geronimo
        </Text>
      </div>
      <div className={style.columns}>{renderColumns}</div>
      <Curtain amount={collection.length} isLoading={loading} />
    </Fragment>
  );
};

export default Home;
