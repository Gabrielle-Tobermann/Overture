import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import Footer from '../components/Footer';
import Routes from '../helpers/routes';
import NavBar from '../components/Navbar';
import './App.scss';

function App() {
  const [user, setUser] = useState(null);
  // const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && authed.uid !== process.env.REACT_ADMIN_UID) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
          admin: false
        };
        setUser(userObj);
      } else if (authed && authed.uid === process.env.REACT_ADMIN_UID) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
          admin: true
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
