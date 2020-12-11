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
  psevdo,
  withOutHover,
  display,
  theme,
  disableHover,
  withoutCursor,
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
      className={classnames(styles.root, className, {
        'js-hover-noStuck': !withoutCursor,
      })}
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
  theme: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  withOutHover: PropTypes.bool,
  withoutCursor: PropTypes.bool,
  psevdo: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.string,
  onClick: PropTypes.func,
  hover: PropTypes.oneOf(['white', 'black', 'none']),
  display: PropTypes.oneOf(['block', 'inline-block']),
  disableHover: PropTypes.bool,
  blank: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  withoutCursor: false,
  color: '',
  theme: '',
  children: {},
  className: '',
  href: '',
  disabled: false,
  withOutHover: false,
  psevdo: '',
  to: '/',
  onClick: () => {},
  hover: 'none',
  display: 'block',
  disableHover: false,
  blank: false,
};

export default React.memo(Button);
