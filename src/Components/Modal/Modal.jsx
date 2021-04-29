import React, { Component } from 'react';

import PropTypes from 'prop-types';

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
    

    return (
      <div className={styles.overlay} onClick={this.checkEvent}>
        <div className={styles.modal}>
          {this.props.children}
        </div>
      </div>
    );
  }
}



Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default Modal;
