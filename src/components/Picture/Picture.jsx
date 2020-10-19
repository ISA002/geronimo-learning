import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({ className, retinaPreviewImg, previewImg }) => {
  return (
    <>
      <img
        className={className}
        src={previewImg}
        srcSet={retinaPreviewImg}
        alt="preview"
      />
    </>
  );
};

Picture.propTypes = {
  className: PropTypes.string.isRequired,
  retinaPreviewImg: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired,
};

export default Picture;