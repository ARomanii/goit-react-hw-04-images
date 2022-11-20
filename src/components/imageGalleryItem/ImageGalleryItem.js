import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onclick }) => (
  <li className={css.ImageGalleryItem} id={image.id} onClick={onclick}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
      className={css.ImageGalleryItemImage}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onclick: PropTypes.func.isRequired,
};