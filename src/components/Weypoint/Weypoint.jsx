import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';

const Weypoint = ({
  className,
  onEnter,
  onLeave,
  children,
  bottomOffset,
  style,
}) => {
  const percent = Number(bottomOffset.replace('%', '')) || 0;

  const handleChange = (inView, entry) => {
    if (entry && entry.isIntersecting && onEnter && inView) {
      onEnter();
    }

    if (entry && !entry.isIntersecting && onLeave && !inView) {
      onLeave();
    }
  };

  return (
    <InView
      as="div"
      className={className}
      threshold={percent * 0.01}
      onChange={handleChange}
      style={style}
    >
      {children}
    </InView>
  );
};

Weypoint.propTypes = {
  className: PropTypes.string,
  onEnter: PropTypes.func,
  onLeave: PropTypes.func,
  children: PropTypes.any.isRequired,
  bottomOffset: PropTypes.string,
  style: PropTypes.object,
};

Weypoint.defaultProps = {
  className: '',
  onEnter: () => {},
  onLeave: () => {},
  bottomOffset: '',
  style: {},
};

export default React.memo(Weypoint);
