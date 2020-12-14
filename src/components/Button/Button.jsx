import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './Button.scss';

const Button = ({
  color,
  children,
  className,
  href,
  disabled,
  to,
  type,
  onClick,
  hover,
  display,
  blank,
  ...props
}) => {
  const CustomTag = (() => {
    if (to) return Link;
    if (href) return 'a';
    return 'button';
  })();

  return (
    <CustomTag
      data-active="link"
      className={classnames(styles.root, className)}
      to={to}
      href={href}
      target={href && blank ? '_blank' : undefined}
      disabled={disabled}
      type={href || to ? undefined : type}
      onClick={onClick}
      {...props}
    >
      {children}
    </CustomTag>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.string,
  onClick: PropTypes.func,
  hover: PropTypes.oneOf(['white', 'black', 'none']),
  display: PropTypes.oneOf(['block', 'inline-block']),
  blank: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  color: '',
  children: {},
  className: '',
  href: '',
  disabled: false,
  to: '/',
  onClick: () => {},
  hover: 'none',
  display: 'block',
  blank: false,
};

export default React.memo(Button);
