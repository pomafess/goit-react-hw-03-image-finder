import React from 'react';

import PropTypes from 'prop-types';

import styles from './Notify.module.css';

const Notify = ({ message }) => {
  return <p className={styles.notify}>{message}</p>;
};




Notify.propTypes = {
  message: PropTypes.string.isRequired
};

export default Notify;
