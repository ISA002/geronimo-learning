import React, { Fragment } from 'react';
import Column from './Column';
import style from './Home.scss';
import image1 from 'images/version_case_image.jpg';

const Home = () => {
  const data = [
    { id: 0, title: 'TV', image: image1 },
    { id: 1, title: 'FILM', image: image1 },
    { id: 2, title: 'PUB', image: image1 },
  ];

  const renderColumns = React.useMemo(() => {
    return data.map(item => <Column data={item} />);
  }, [data]);

  return (
    <Fragment>
      <div className={style.root}>{renderColumns}</div>
    </Fragment>
  );
};

export default Home;
