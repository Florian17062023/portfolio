import React from 'react';
import Header from '../composents/Header';
import Navbar from '../composents/Navbar';
import Footer from '../composents/Footer';

const Layout = ({ children }) => {
  return (
    <div className="container-flex">
      <Header />
      <Navbar />
      <div className="content-container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;