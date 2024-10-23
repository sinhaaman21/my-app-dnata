import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Navbar/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
