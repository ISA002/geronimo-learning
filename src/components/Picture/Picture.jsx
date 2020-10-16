import React from 'react';
import useBrowser from 'hooks/useBrowser';
import PropTypes from 'prop-types';

const Picture = ({ className, retinaPreviewImg, previewImg }) => {
  const browser = useBrowser();

  return (
    <>
      {browser.os.name === 'macOS' ? (
        <img
          className={className}
          src={retinaPreviewImg}
          alt="retina_preview"
        />
      ) : (
        <img className={className} src={previewImg} alt="preview" />
      )}
    </>
  );
};

Picture.propTypes = {
  className: PropTypes.string.isRequired,
  retinaPreviewImg: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired,
};

export default Picture;
