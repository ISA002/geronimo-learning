/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Animated from 'components/Animated';
import Text from 'components/Text';
import PropTypes from 'prop-types';
import style from './Slide.scss';
import classnames from 'classnames';

const Slide = props => {
  const { loading, sliderState, item, index } = props;
  const [playingVideo, setPlayingVideo] = React.useState(false);
  const rootRef = React.useRef();
  const ref = React.useRef();

  React.useEffect(() => {
    let data;
    rootRef.current.addEventListener('mouseover', () => {
      ref.current.currentTime = 0;
      setPlayingVideo(true);
      data = ref.current.play();
    });

    rootRef.current.addEventListener('mouseout', () => {
      setPlayingVideo(false);
      if (data !== undefined) {
        data.then(() => {
          ref.current.pause();
        });
      }
    });
  }, [rootRef, ref]);

  return (
    <div key={item.id} ref={rootRef} className={style.root}>
      <Animated
        className={style.slideCurtainWrapper}
        isVisible={!loading}
        animationIn="slideInUp"
        animationOut="slideOutUp"
        delay={{
          in: 100,
          out: 300,
        }}
        duration={{
          in: 100,
          out: 300,
        }}
      >
        <div className={style.slideCurtain} />
      </Animated>
      <div key={item.id} className={style.imageWrapper}>
        <img
          className={style.slideImg}
          src={item.preview_image_versions_urls.preview}
          alt="film"
        />
        <video
          ref={ref}
          className={classnames(style.slideVideo, {
            [style.visibleSlideVideo]: playingVideo,
          })}
          poster={item.preview_image_versions_urls.preview}
          muted="muted"
          loop
        >
          <source src={item.preview_video_url} type="video/mp4" />
        </video>
      </div>
      <Animated
        isVisible={loading && sliderState.active === index}
        className={style.slideTitle}
        animationIn="fadeInUpSmall"
        duration={{
          in: 600,
          out: 250,
        }}
        delay={{
          in: 800,
          out: 100,
        }}
      >
        <Text
          fontWeight="bold"
          fontType="BebasNeueBold"
          size="42"
          color="main-white"
        >
          {item.title}
        </Text>
      </Animated>
      <Animated
        isVisible={loading && sliderState.active === index}
        className={style.slideSubTitle}
        animationIn="fadeInUpSmall"
        duration={{
          in: 900,
          out: 250,
        }}
        delay={{
          in: 900,
          out: 300,
        }}
      >
        <Text
          fontWeight="bold"
          fontType="BebasNeueBold"
          size="35"
          color="main-white"
        >
          {item.subtitle}
        </Text>
      </Animated>
    </div>
  );
};

Slide.propTypes = {
  loading: PropTypes.bool.isRequired,
  sliderState: PropTypes.any.isRequired,
  item: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
};

export default React.memo(Slide);
