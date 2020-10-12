import React from 'react';
import Text from 'components/Text';
import style from './Column.scss';
import PropTypes from 'prop-types';

const Column = ({ data: { title, image } }) => {
  return (
    <div className={style.root}>
      <img className={style.columnImage} src={image} alt="pict" />
      <Text color="main-black" className={style.columnText} size="25">
        {title}
      </Text>
    </div>
  );
};

Column.propTypes = {
  data: PropTypes.any,
};

Column.defaultProps = {
  data: {},
};

export default React.memo(Column);
