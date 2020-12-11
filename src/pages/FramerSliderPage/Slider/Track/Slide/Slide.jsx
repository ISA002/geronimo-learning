/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Animated from 'components/Animated';
import Text from 'components/Text';
import PropTypes from 'prop-types';
import style from './Slide.scss';
import classnames from 'classnames';
import clamp from 'utils/clamp';
import { useHistory } from 'react-router-dom';
import { useAnimation, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import {
  changeAnimationSelector,
  toDetailSelector,
  sliderActiveSelector,
} from 'models/common/selectors';
import Picture from 'components/Picture';

const Slide = ({ loading, item, index, className }) => {
  const controls = useAnimation();
  const history = useHistory();
  const activeSlide = useSelector(sliderActiveSelector);
  const isUnstandartPageTransition = useSelector(changeAnimationSelector);
  const [playingVideo, setPlayingVideo] = React.useState(false);
  const [redirectToDetail, setRedirectToDetail] = React.useState(true);
  const toDetail = useSelector(toDetailSelector);
  const rootRef = React.useRef();
  const ref = React.useRef();

  React.useEffect(() => {
    let data;
    rootRef.current.addEventListener('mouseenter', () => {
      ref.current.currentTime = 0;
      setPlayingVideo(true);
      data = ref.current.play();
    });

    rootRef.current.addEventListener('mouseleave', () => {
      setPlayingVideo(false);
      if (data !== undefined) {
        data.then(() => {
          ref.current.pause();
        });
      }
    });
  }, [rootRef, ref]);

  const delaySlideCurtain = React.useMemo(() => {
    return clamp(index, 0, 2);
  }, [index]);

  React.useEffect(() => {
    if (!redirectToDetail) {
      controls.start({
        transition: {
          duration: 0.6,
          delay: 0.4,
        },
        zIndex: 999999,
        height: window.innerHeight * 0.6 * 1.4285,
        width: window.innerWidth * 0.78,
        x: -Math.ceil(window.innerWidth * 0.2),
        y: -Math.ceil(window.innerHeight * 0.12),
      });
    }
  }, [redirectToDetail, controls]);

  const redirectToIndividualPage = React.useCallback(() => {
    history.push(`/tv/${index}`);
    setRedirectToDetail(false);
  }, [history, index]);

  const slideVisibility = React.useMemo(() => {
    if (isUnstandartPageTransition) {
      if (activeSlide === index) {
        return false;
      }
      if (loading) {
        return toDetail;
      }
      return true;
    }
    return !loading;
  }, [isUnstandartPageTransition, loading, activeSlide, index, toDetail]);

  return (
    <motion.div
      animate={controls}
      className={className}
      onClick={redirectToIndividualPage}
    >
      <div key={item.id} ref={rootRef} className={style.root}>
        <Animated
          className={style.slideCurtainWrapper}
          isVisible={slideVisibility}
          animationOut="slideOutUp"
          duration={{ in: toDetail ? 200 : 0, out: 1000 }}
          delay={{
            in: toDetail ? 200 : 0,
            out: delaySlideCurtain * 200 + 800,
          }}
        >
          <div className={style.slideCurtain} />
        </Animated>
        <div className={style.imageWrapper}>
          <Picture
            className={style.slideImg}
            previewImg={item.preview_image_versions_urls.preview}
            retinaPreviewImg={item.preview_image_versions_urls.preview_x2}
          />
          {redirectToDetail && (
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
          )}
        </div>
        <Animated
          isVisible={loading && activeSlide === index}
          className={style.slideTitle}
          animationIn="fadeInUpSmall"
          duration={{
            in: 900,
            out: 250,
          }}
          delay={{
            in: 700,
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
          isVisible={loading && activeSlide === index}
          className={style.slideSubTitle}
          animationIn="fadeInUpSmall"
          duration={{
            in: 1000,
            out: 250,
          }}
          delay={{
            in: 1100,
            out: 100,
          }}
        >
          <Text fontType="BebasNeueBold" size="18" color="main-white">
            {item.subtitle}
          </Text>
        </Animated>
      </div>
    </motion.div>
  );
};

Slide.propTypes = {
  loading: PropTypes.bool.isRequired,
  item: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Slide.defaultProps = {
  className: '',
};

export default React.memo(Slide);
