import React from 'react';
import PropTypes from 'prop-types';

import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <div>
      <button type="button" onClick={onClick} className={css.Button}>
        Load More
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;