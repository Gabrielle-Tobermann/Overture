import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import Routes from '../helpers/routes';
import './App.scss';

function App() {
  return (
    <div className='App'>
    <Router>
      <NavBar/>
      <Routes/>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
