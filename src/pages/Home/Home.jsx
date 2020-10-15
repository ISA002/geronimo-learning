import React, { Fragment } from 'react';
import Column from './Column';
import style from './Home.scss';
import Text from 'components/Text';
import { useSelector } from 'react-redux';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import { collectionSelector } from 'models/info/selectors';
import Header from 'components/Header';
import Shirma from './Shirma';

const Home = () => {
  const loading = useSelector(loadingFinishedSelector);
  const collection = useSelector(collectionSelector);

  console.log(collection);

  const renderColumns = React.useMemo(() => {
    return collection.map((item, index) => (
      <Column
        video={collection[index].preview.video_url}
        image={collection[index].preview.image_urls.original}
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
          size="140"
          color="main-white"
          fontWeight="bold"
        >
          geronimo
        </Text>
      </div>
      <div className={style.root}>{renderColumns}</div>
      <Shirma isLoading={loading} />
    </Fragment>
  );
};

export default Home;
