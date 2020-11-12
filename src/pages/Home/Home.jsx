/* eslint-disable no-multi-assign */
import React from 'react';
import Column from './Column';
import style from './Home.scss';
import { useSelector } from 'react-redux';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import { collectionSelector } from 'models/info/selectors';
import Header from 'components/Header';
import PropTypes from 'prop-types';

const Home = ({ isLoaded }) => {
  const loading = useSelector(loadingFinishedSelector);
  const collection = useSelector(collectionSelector);
  const canvasRef = React.useRef();

  const [isLoadedState, setIsLoadedState] = React.useState(false);

  React.useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    let widthCanvas = window.innerWidth;
    let heightCanvas = window.innerHeight;
    let height = heightCanvas + 200;
    const textWidth = 700;

    const drawRect = () => {
      const rectWidth = widthCanvas / 3 + 1;

      ctx.clearRect(0, 0, widthCanvas, heightCanvas);

      ctx.save();
      ctx.fillStyle = '#191919';
      ctx.fillRect(0, 0, rectWidth, height - 200);
      ctx.fillRect(rectWidth - 1, 0, rectWidth * 2, height - 100);
      ctx.fillRect(rectWidth * 2 - 1, 0, rectWidth * 3, height);
      ctx.restore();

      ctx.save();
      ctx.globalCompositeOperation = 'xor';
      ctx.fillStyle = 'white';
      ctx.font = '200px Arial';
      ctx.fillText(
        'geronimo',
        widthCanvas / 2 - textWidth / 2,
        heightCanvas / 2,
        textWidth
      );
      ctx.restore();

      if (loading && isLoadedState && height > 0) {
        height -= 8;
        window.requestAnimationFrame(drawRect);
      }
    };

    const resizeCanvas = () => {
      canvasRef.current.width = widthCanvas = window.innerWidth;
      canvasRef.current.height = heightCanvas = window.innerHeight;
      drawRect();
    };

    resizeCanvas();
    drawRect();

    window.addEventListener('resize', resizeCanvas, false);

    return () => {
      window.removeEventListener('resize', resizeCanvas, false);
    };
  }, [canvasRef, loading, isLoadedState]);

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
    <div className={style.root}>
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
