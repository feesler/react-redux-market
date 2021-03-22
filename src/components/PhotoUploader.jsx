import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const fileToDataUrl = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener('load', (e) => {
      resolve(e.currentTarget.result);
    });

    fileReader.addEventListener('error', (e) => {
      reject(new Error(e.currentTarget.error));
    });

    fileReader.readAsDataURL(file);
  });
}

function PhotoUploader(props) {
  const { image, onUpload } = props;
  const [imageData, setImageData] = useState(image);
  const fileInputRef = useRef();

  const loadImageData = async (file) => {
    const data = await fileToDataUrl(file);
    setImageData(data);
    onUpload(data);
  }

  const handleUpload = (e) => {
    const files = [...e.target.files];
    const [file] = files;

    if (file) {
      loadImageData(file);
    }
  }

  useEffect(() => {
    setImageData(image);
  }, [image])

  const uploadTitle = (imageData)
    ? 'Изменить'
    : 'Нажмите чтобы выбрать';

  const uploadStyle = (imageData)
    ? { backgroundImage: `url(${imageData})` }
    : null;
  const noImageTitle = (imageData) ? null : 'Изображение отсутствует';

  return (
    <div className={classNames('photo-uploader', { 'photo-uploader__uploaded': !!imageData })}>
      <input
        className="photo-uploader__file"
        type="file"
        accept="image/*"
        multiple
        onChange={handleUpload}
        ref={fileInputRef}
      />
      <div className="photo-uploader__upload-area">{uploadTitle}</div>
      <div className="photo-uploader__preview" style={uploadStyle}>{noImageTitle}</div>
    </div>
  )
}

PhotoUploader.propTypes = {
  image: PropTypes.any,
  onUpload: PropTypes.func.isRequired,
};

PhotoUploader.defaultProps = {
  image: null,
};

export default PhotoUploader;
