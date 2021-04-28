import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import {getPhotos} from './Services/apiService';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Notify from './Components/Notify';
import Modal from './Components/Modal';
import Button from './Components/Button';
import {initialState} from "./Services/initialState"

import styles from './App.module.css';

class App extends Component {
  state = { ...initialState }
  
  componentDidMount() {
    this.searchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoading) {
      // this.setState({ page: 1 });
      this.searchImages();
    }
    if (prevState.page !== this.state.page) {
      this.searchImages();
    }
  }

  searchImages() {
    const { searchQuery, page } = this.state;

    getPhotos(searchQuery, page)
      .then(({data}) => {

        if (page === 1) {
          this.setState({
            totalHits: data.totalHits,
            images: data.hits,
          });
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
          }));
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
        this.showButton();
        this.showNotify();
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  onSubmit = value => {
    this.setState({ searchQuery: value, images: [], page: 1, isLoading: true });
    
  };

  onButtonMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  showButton = () => {
    const { totalHits, images } = this.state;

    if (totalHits > images.length) {
      this.setState({ showButton: true });
    } else {
      this.setState({ showButton: false });
    }
  }
  showNotify = () => {
    const { totalHits } = this.state;

    if (!totalHits) {
      this.setState({ emptyNotify: true });
    } else {
      this.setState({ emptyNotify: false });
    }
  };

  toggleModal = ({ status, src, alt }) => {
    if (status) {
      this.setState({
        targetImage: { src, alt },
        onModal: true,
      });
    } else {
      this.setState({
        targetImage: null,
        onModal: false,
      });
    }
  };

  render() {
    const {
      images,
      isLoading,
      error,
      emptyNotify,
      onModal,
      targetImage,
      showButton,
    } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {error && <Notify message={`Что-то не так: ${error.message}`} />}
        {isLoading && (
          <Loader type="BallTriangle" color="#2a52be" height={120} width={120} />
        )}
        {images.length > 0 && (
          <ImageGallery images={images} toggleModal={this.toggleModal} />
        )}
        {emptyNotify && (
          <Notify message="Ничего не найдено." />
        )}
        {onModal && (
          <Modal
            src={targetImage.src}
            alt={targetImage.alt}
            toggleModal={this.toggleModal}
          />
        )}
        {showButton && <Button onClick={this.onButtonMoreClick} />}
      </div>
    );
  }
}

export default App;
