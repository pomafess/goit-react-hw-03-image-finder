import React from 'react';
import styles from './Notify.module.css';

const Notify = ({ message }) => {
  return <p className={styles.Notify}>{message}</p>;
};

export default Notify;
