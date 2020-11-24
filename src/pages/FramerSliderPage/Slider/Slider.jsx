/* eslint-disable no-return-assign */
import React from 'react';
import style from './Slider.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Track from './Track';
import { ContextProvider } from './Context';
import Pagination from './Pagination';

const Slider = ({ className, config = {} }) => {
  const [slideWidth, setSlideWidth] = React.useState(0);

  React.useEffect(() => {
    const resize = () => {
      setSlideWidth(Math.round(window.innerWidth * 0.68));
    };

    setSlideWidth(Math.round(window.innerWidth * 0.68));

    document.addEventListener('resize', resize);

    return () => {
      document.removeEventListener('resize', resize);
    };
  }, [slideWidth]);

  return (
    <div className={classnames(style.root, className)}>
      <ContextProvider>
        <>
          <Track config={config} slideWidth={slideWidth} />
          <Pagination config={config} />
        </>
      </ContextProvider>
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  config: PropTypes.any,
};

Slider.defaultProps = {
  className: '',
  config: {},
};

export default React.memo(Slider);
