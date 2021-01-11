import React from 'react';
import style from './Home.scss';
import Scene from './Scene/Scene';

const Home = () => {
  const ref = React.useRef();

  React.useEffect(() => {
    const scene = new Scene(ref.current);

    return () => {
      scene.destroyListener();
    };
  }, [ref]);

  return (
    <div className={style.root}>
      <div className={style.container}>
        <div className={style.imageWrapper} ref={ref} />
      </div>
    </div>
  );
};

export default React.memo(Home);
