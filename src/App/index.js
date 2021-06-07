import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import Routes from '../helpers/routes';
import './App.scss';

function App() {
  const [user, setUser] = useState(null);
  // const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
    <Router>
      <NavBar
      user={user}
      />
      <Routes
      user={user}
      />
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
