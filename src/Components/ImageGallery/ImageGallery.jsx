import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem';

import PropTypes from 'prop-types';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, toggleModal }) => {
  const checkEvent = e => {
    if (e.target !== e.currentTarget) {
      toggleModal({
        status: true,
        src: e.target.dataset.imageurl,
        alt: e.target.alt,
      });
    }
  };
const imageElements = images.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))
  return (
    <ul className={styles.imageGallery} onClick={checkEvent}>
      {imageElements}
    </ul>
  );
};
 


ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default ImageGallery;
