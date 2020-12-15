import React from 'react';
import style from './Home.scss';
import Card from './Card/Card';

const Home = () => {
  const ref = React.useRef();

  React.useEffect(() => {
    const card = new Card(ref.current);

    console.log('amwfak');
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
