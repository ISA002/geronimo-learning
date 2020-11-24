import React from 'react';
import style from './Button.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({ direction, imgSrc, className, onClick }) => (
  <div className={classnames(style.root, className)}>
    <button className={style.button} onClick={onClick}>
      <img className={style.buttonImage} src={imgSrc} alt={direction} />
    </button>
  </div>
);

Button.propTypes = {
  direction: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default React.memo(Button);
