// src/app/ClientLayout.js
"use client";
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ClientLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </Provider>
  );
};

export default ClientLayout;
