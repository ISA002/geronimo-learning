/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Text from 'components/Text';
import style from './Column.scss';
import PropTypes from 'prop-types';
import Animated from 'components/Animated';

const Column = ({ index, isLoading, title, image, video }) => {
  const ref = React.useRef(null);
  const rootRef = React.useState(null);

  React.useEffect(() => {
    rootRef.current.addEventListener('mouseover', () => {
      ref.current.play();
    });

    rootRef.current.addEventListener('mouseout', () => {
      ref.current.currentTime = 0;
      ref.current.pause();
    });
  }, [rootRef, ref]);

  return (
    <div className={style.root} ref={rootRef}>
      <img className={style.columnImage} src={image} alt="pict" />
      <video
        ref={ref}
        className={style.columnGif}
        poster={image}
        muted="muted"
        loop
      >
        <source src={video} type="video/mp4" />
      </video>
      <Animated
        className={style.columnTextWrapper}
        isVisible={isLoading}
        duration={{
          in: 600,
          out: 200,
        }}
        delay={{
          in: index * 50 + 400,
          out: 300,
        }}
        animationIn="fadeInUpSmall"
      >
        <Text className={style.columnText} size="42" color="main-white">
          {title}
        </Text>
      </Animated>
    </div>
  );
};

Column.propTypes = {
  index: PropTypes.number,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  image: PropTypes.string,
  video: PropTypes.string,
};

Column.defaultProps = {
  index: 0,
  isLoading: true,
  title: '',
  image: '',
  video: '',
};

export default React.memo(Column);
