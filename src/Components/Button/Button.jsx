import React from 'react';

import styles from './Button.module.css';

const Button = ({ onClick, text, className }) => {
  return (
    <div className={`${styles.buttonBox} ${className}`}>
      <button type="button" className={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  className: "",
  text: "Button"
}

export default Button;
