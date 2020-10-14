import React, { Fragment } from 'react';
import Column from './Column';
import style from './Home.scss';
import Text from 'components/Text';
import { useSelector } from 'react-redux';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import { collectionSelector } from 'models/info/selectors';

const Home = () => {
  const loading = useSelector(loadingFinishedSelector);
  const collection = useSelector(collectionSelector);

  const renderColumns = React.useMemo(() => {
    return collection.map((item, index) => (
      <Column
        gif={collection[index].preview.gif_url}
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
      <div className={style.mainTextRoot}>
        <Text
          className={style.mainText}
          size="120"
          color="main-white"
          fontWeight="bold"
        >
          GERONIMO
        </Text>
      </div>
      <div className={style.root}>{renderColumns}</div>
    </Fragment>
  );
};

export default Home;
