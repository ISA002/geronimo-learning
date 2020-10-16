import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({ className, retinaPreviewImg, previewImg }) => {
  const [isRetina, setIsRetina] = React.useState(false);

  React.useEffect(() => {
    setIsRetina(window.devicePixelRatio > 2);
  }, []);

  return (
    <>
      {isRetina ? (
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
