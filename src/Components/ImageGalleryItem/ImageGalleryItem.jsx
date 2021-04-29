import React from 'react';

import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        data-imageurl={image.largeImageURL}
        className={styles.image}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  image: {}
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object
};

export default ImageGalleryItem;
