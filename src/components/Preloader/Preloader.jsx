/* eslint-disable no-param-reassign */
import React from 'react';
import style from './Preloader.scss';
import { useDispatch } from 'react-redux';
import { actions } from 'models/preloader/slice';
import Text from 'components/Text';

const Preloader = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const images = document.getElementsByTagName('img');

    let counter = 0;

    const onLoad = () => {
      counter += 1;
      if (counter === images.length) {
        dispatch({ type: actions.setLoading });
      }
    };

    /* eslint-disable-next-line */
    for (const item of images) {
      if (item.complete) {
        onLoad();
      } else {
        item.onload = onLoad;
      }
    }
  }, [dispatch]);

  return (
    <>
      <div className={style.root}>
        <Text className={style.text} size="18" color="main-white">
          loading...
        </Text>
      </div>
    </>
  );
};

export default Preloader;
