import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../composents/Caroussel';

const imageStyle = {
  maxWidth: '80%',
  height: 'auto',
  maxHeight: '80%',
};

ReactDOM.render(
  <React.StrictMode>
    <Carousel imageStyle={imageStyle} />
  </React.StrictMode>,
  document.getElementById('root')
);
