import React, { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.checkEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.checkEvent);
  }

  checkEvent = e => {
    if (e.key === 'Escape' || e.target === e.currentTarget) {
      this.props.toggleModal({ status: false });
    }
  };

  render() {
    const { src, alt } = this.props;

    return (
      <div className={styles.Overlay} onClick={this.checkEvent}>
        <div className={styles.Modal}>
          <img className={styles.img} src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
