import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem';
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
    <ul className={styles.ImageGallery} onClick={checkEvent}>
      {imageElements}
    </ul>
  );
};
 
export default ImageGallery;
