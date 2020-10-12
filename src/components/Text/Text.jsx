/* prettier-ignore */
import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import modsClasses from 'utils/modsClasses';
import styles from './Text.scss';


class Text extends PureComponent {
  handleClick = () => {
    const { data, onClick } = this.props;

    if (onClick) onClick(data);
  };

  renderedText = () => {
    const {
      children,
      isHtml,
    } = this.props;

    /* eslint-disable react/no-danger */
    if (isHtml) return (<div dangerouslySetInnerHTML={{ __html: children }} />);
    /* eslint-enable react/no-danger */
    return children;
  };

  render() {
    const {
      className,
      size,
      tag,
      color,
      opacity,
      fontSize,
      textAlign,
      mobileSize,
      tabletSize,
      tabletAlbomSize,
      tabletMiddleSize,
      whiteSpace,
      lineHeight,
      letterSpacing,
      letterSpacingSize,
      tabletSpacingSize,
      mobileSpacingSize,
      textTransform,
      fontWeight,
      tabletFontWeight,
      fontType,
      pointerEvents,
      style,
      innerRef,
      mobileAlign,
      tabletAlign,
      mobileFontWeight,
    } = this.props;

    const classes = modsClasses(styles, {
      size,
      color,
      opacity,
      textAlign,
      mobileSize,
      tabletSize,
      tabletAlbomSize,
      tabletMiddleSize,
      whiteSpace,
      fontWeight,
      tabletFontWeight,
      letterSpacing,
      letterSpacingSize,
      tabletSpacingSize,
      mobileSpacingSize,
      textTransform,
      pointerEvents,
      fontType,
      mobileAlign,
      tabletAlign,
      mobileFontWeight,
    });

    const Tag = tag;

    return (
      <Tag
        ref={innerRef}
        style={{
          letterSpacing,
          fontSize,
          lineHeight,
          ...style,
        }}
        className={classnames(styles.root, className, classes)}
        onClick={this.handleClick}
      >
        {this.renderedText()}
      </Tag>
    );
  }
}

// {!html ? children : renderHTML(children)}

const textPropsSize = ['100', '72', '60', '55', '50', '48', '36', '35', '30', '25', '20', '18', '17', '16', '14', '13', '11', '9'];

const textWeight = ['book', 'bold', 'semi-bold', 'medium', 'normal', 'thin'];

const textPropsAlign = ['left', 'center', 'right'];

const letterSpacingPropSize = [
  '300',
  '175',
  '125',
  '11',
  '015',
  '085',
  '0',
  '1',
  'negative01',
  'negative18',
  'negative10',
  'negative7',
  'negative6',
  'negative02',
  'negative1',
  'negative282',
  'negative27',
  'negative2',
  'negative8',
];

Text.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(textPropsSize),
  mobileSize: PropTypes.oneOf(textPropsSize),
  tabletSize: PropTypes.oneOf(textPropsSize),
  tabletAlbomSize: PropTypes.oneOf(textPropsSize),
  tabletMiddleSize: PropTypes.oneOf(textPropsSize),
  letterSpacingSize: PropTypes.oneOf(letterSpacingPropSize),
  tabletSpacingSize: PropTypes.oneOf(letterSpacingPropSize),
  mobileSpacingSize: PropTypes.oneOf(letterSpacingPropSize),
  fontType: PropTypes.oneOf(['GTSectra', 'DINNextLTPro']),
  fontWeight: PropTypes.oneOf(textWeight),
  tabletFontWeight: PropTypes.oneOf(textWeight),
  mobileFontWeight: PropTypes.oneOf(textWeight),

  color: PropTypes.oneOf(['main-black', 'main-green', 'main-white', 'main-dark-gray', 'main-red']),
  textTransform: PropTypes.oneOf(['uppercase', 'none', 'capitalize']),
  whiteSpace: PropTypes.oneOf(['normal', 'nowrap', 'prewrap']),
  opacity: PropTypes.oneOf(['light', 'middle', 'dark']),
  textAlign: PropTypes.oneOf(textPropsAlign),
  tabletAlign: PropTypes.oneOf(textPropsAlign),
  mobileAlign: PropTypes.oneOf(textPropsAlign),
  pointerEvents: PropTypes.oneOf(['cursor', 'auto', 'none']),
  letterSpacing: PropTypes.string,
  lineHeight: PropTypes.string,
  fontSize: PropTypes.string,
  data: PropTypes.any,
  isHtml: PropTypes.bool,
  tag: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
  style: PropTypes.object,
  innerRef: PropTypes.func,
};

Text.defaultProps = {
  tag: 'div',
  color: 'main-black',
  fontWeight: 'normal',
  isHtml: false,
};

export default Text;
