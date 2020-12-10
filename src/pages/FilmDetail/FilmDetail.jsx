/* eslint-disable react/no-danger */
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filmCasesSelector } from 'models/info/selectors';
import style from './FilmDetail.scss';
import { motion, useAnimation } from 'framer-motion';
import Animated from 'components/Animated';
import Text from 'components/Text';
import { actions } from 'models/common/slice';

const FilmDetail = ({
  match: {
    params: { id },
  },
  isLoaded,
}) => {
  const control = useAnimation();
  const history = useHistory();
  const cases = useSelector(filmCasesSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    return history.listen(location => {
      if (location.pathname === '/tv') {
        dispatch({
          type: actions.setChangeAnimation,
          changeAnimation: true,
          toDetail: false,
        });
      }
    });
  }, [dispatch, history]);

  const backPage = React.useCallback(() => {
    history.goBack();
    control.start({
      transition: {
        delay: 0.4,
        duration: 0.7,
      },
      height: window.innerHeight * 0.7 * 0.7,
      width: window.innerWidth * 0.6,
      x: Math.ceil(window.innerWidth * 0.2),
      y: Math.ceil(window.innerHeight * 0.12),
    });
  }, [control, history]);

  const renderDescription = React.useMemo(() => {
    return cases[id].description;
  }, [cases, id]);

  return (
    <div className={style.root}>
      <motion.div animate={control} className={style.preview}>
        <img
          className={style.previewImg}
          src={cases[id].preview_image_versions_urls.preview}
          alt="plug"
        />
      </motion.div>
      <Animated
        className={style.titles}
        isVisible={isLoaded}
        delay={{ in: 150, out: 50 }}
      >
        <Text
          fontWeight="bold"
          fontType="BebasNeueBold"
          size="42"
          color="main-white"
        >
          {cases[id].title}
        </Text>
        <Text fontType="BebasNeueBold" size="18" color="main-white">
          {cases[id].subtitle}
        </Text>
      </Animated>
      <Animated
        className={style.description}
        isVisible={isLoaded}
        delay={{ in: 200, out: 50 }}
      >
        <Text
          fontWeight="normal"
          fontType="Robotobold"
          size="16"
          color="main-white"
        >
          <div
            className={style.descriptionWrapper}
            dangerouslySetInnerHTML={{ __html: renderDescription }}
          />
        </Text>
      </Animated>
      <Animated
        className={style.backButton}
        isVisible={isLoaded}
        animationOut="fadeOut"
      >
        <button onClick={backPage}>back</button>
      </Animated>
    </div>
  );
};

FilmDetail.propTypes = {
  match: PropTypes.object.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

export default React.memo(FilmDetail);
