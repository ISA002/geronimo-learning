/* eslint-disable consistent-return */
import React from 'react';
import Column from './Column';
import style from './Home.scss';
import { useSelector } from 'react-redux';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import { collectionSelector } from 'models/info/selectors';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import Curtain from './Curtain';

const Home = ({ isLoaded }) => {
  const loading = useSelector(loadingFinishedSelector);
  const collection = useSelector(collectionSelector);
  const canvasRef = React.useRef();
  const pageWrapper = React.useRef();

  const [isLoadedState, setIsLoadedState] = React.useState(false);

  const curtain = React.useRef(null);

  React.useEffect(() => {
    if (!canvasRef.current || curtain.current) return;
    const canvas = canvasRef.current;

    curtain.current = new Curtain(collection.length, canvas, 'geronimo');

    return () => {
      curtain.current.destroy();
    };
  }, [canvasRef, curtain, collection]);

  React.useEffect(() => {
    if (loading && isLoadedState) {
      curtain.current.show();
    }
  }, [loading, isLoadedState, curtain]);

  React.useEffect(() => {
    if (isLoaded) {
      setIsLoadedState(true);
    }
  }, [isLoaded]);

  const renderColumns = React.useMemo(() => {
    return collection.map((item, index) => (
      <Column
        video={collection[index].preview.video_url}
        images={collection[index].preview.image_urls}
        title={collection[index].title}
        isLoading={loading}
        index={index}
        key={item.id}
        slug={collection[index].slug}
      />
    ));
  }, [collection, loading]);

  return (
    <div className={style.root} ref={pageWrapper}>
      <Header loading={loading && isLoadedState} home />
      <div className={style.columns}>{renderColumns}</div>
      <canvas className={style.canvas} ref={canvasRef} />
    </div>
  );
};

Home.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
};

export default React.memo(Home);
