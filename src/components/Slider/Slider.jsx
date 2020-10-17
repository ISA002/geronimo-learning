import React from 'react';
import style from './Slider.scss';
import classnames from 'classnames';

const Slider = props => {
  const { className } = props;

  return <div className={classnames(style.root, className)}>Slider</div>;
};

export default Slider;
