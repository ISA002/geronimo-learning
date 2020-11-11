/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import style from './Preloader.scss';
import { useDispatch } from 'react-redux';
import { actions } from 'models/preloader/slice';
import Text from 'components/Text';

const Preloader = () => {
  const dispatch = useDispatch();
  const [images, setImages] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const pageWrapper = document.getElementById('pageWrapper');

    if (!loading) {
      pageWrapper.style.overflow = 'hidden';
    } else {
      pageWrapper.style.overflow = 'scroll';
    }
  }, [loading]);

  React.useEffect(() => {
    if (document.readyState !== 'loading') {
      setImages(document.getElementsByTagName('img'));
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        setImages(document.getElementsByTagName('img'));
      });
    }
  }, []);

  React.useEffect(() => {
    let counter = 0;

    const onLoad = () => {
      counter += 1;
      if (counter === images.length) {
        setLoading(true);
        dispatch({ type: actions.setLoading });
      }
    };

    /* eslint-disable-next-line */
    if (images) {
      setLoading(false);
      for (const item of images) {
        if (item.complete) {
          onLoad();
        } else {
          item.onload = onLoad;
        }
      }
    }
  }, [images, dispatch]);

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
