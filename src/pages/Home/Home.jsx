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

  const timingFunc = React.useCallback(timeFraction => {
    return 1 - Math.sin(Math.acos(timeFraction));
  }, []);

  const animate = React.useCallback(({ timing, draw, duration }) => {
    const start = performance.now();

    requestAnimationFrame(function animates(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      const progress = timing(timeFraction);

      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animates);
      }
    });
  }, []);

  React.useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    let widthCanvas = window.innerWidth;
    let heightCanvas = window.innerHeight;
    let height = heightCanvas + 200;
    const textWidth = 700;

    const drawRect = progress => {
      const rectWidth = widthCanvas / 3 + 1;

      ctx.clearRect(0, 0, widthCanvas, heightCanvas);

      height = (1 - progress) * (heightCanvas + 200);

      ctx.save();
      ctx.fillStyle = '#191919';
      ctx.fillRect(0, 0, rectWidth + 1, height - 200);
      ctx.fillRect(rectWidth - 1, 0, rectWidth * 2 - 1, height - 100);
      ctx.fillRect(rectWidth * 2 - 1, 0, rectWidth * 3 - 1, height);
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

      console.log(progress);
      // if (loading && isLoadedState && height > 0) {
      //   height -= 7;
      //   window.requestAnimationFrame(drawRect);
      // }
    };

    if (loading && isLoadedState) {
      animate({
        duration: 1000,
        timing: timingFunc,
        draw: drawRect,
      });
    }

    const resizeCanvas = () => {
      canvasRef.current.width = widthCanvas = window.innerWidth;
      canvasRef.current.height = heightCanvas = window.innerHeight;
      if (height === 0) {
        drawRect(1);
      } else {
        drawRect(0);
      }
    };

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas, false);

    return () => {
      window.removeEventListener('resize', resizeCanvas, false);
    };
  }, [canvasRef, loading, isLoadedState, animate, timingFunc]);

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
