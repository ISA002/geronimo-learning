import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import modsClasses from 'utils/modsClasses';

import styles from './Button.scss';

class Button extends PureComponent {
  static propTypes = {
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
    hover: PropTypes.oneOf(['white', 'black']),
    display: PropTypes.oneOf(['block', 'inline-block']),
    disableHover: PropTypes.bool,
    homeMenuHover: PropTypes.bool,
    headerItemHover: PropTypes.bool,
    darkHovers: PropTypes.bool,
    underline: PropTypes.bool,
    greenUnderline: PropTypes.bool,
    blank: PropTypes.bool,
  }

  static defaultProps = {
    type: 'button',
    withoutCursor: false,
  }

  render() {
    const {
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
      underline,
      greenUnderline,
      homeMenuHover,
      headerItemHover,
      darkHovers,
      blank,
      ...props
    } = this.props;

    const classes = modsClasses(styles, {
      color,
      hover,
      psevdo,
      display,
    });

    const CustomTag = (() => {
      if (to) return Link;
      if (href) return 'a';
      return 'button';
    })();

    return (
      <CustomTag
        data-active="link"
        className={classnames(
          styles.root,
          className,
          classes,
          {
            [styles.wrapperUnderline]: underline,
            [styles.wrapperGreenUnderline]: greenUnderline,
            [styles.wrapperHomeMenuHover]: homeMenuHover,
            [styles.wrapperHeaderItemHover]: headerItemHover && !darkHovers,
            [styles.wrapperHeaderItemDarkHover]: darkHovers,
            'js-hover-noStuck': !withoutCursor,
          }
        )}
        to={to}
        href={href}
        target={href && blank ? '_blank' : undefined}
        disabled={disabled}
        type={href || to ? undefined : type}
        onClick={onClick}
        {...props}
      >
        {children}
        {underline && <div className={styles.underline} />}
        {greenUnderline && <div className={styles.greenUnderline} />}
        {homeMenuHover && <div className={styles.homeMenuHover} />}
        {headerItemHover && !darkHovers && <div className={styles.headerItemHover} />}
        {darkHovers && <div className={styles.headerItemDarkHover} />}
      </CustomTag>
    );
  }
}

export default Button;
