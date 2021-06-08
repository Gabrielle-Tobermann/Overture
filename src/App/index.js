import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import Footer from '../components/Footer';
import Routes from '../helpers/routes';
import NavBar from '../components/Navbar';
import './App.scss';

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        // const userObj = {
        //   fullName: authed.displayName,
        //   profilePicture: authed.photoURL,
        //   uid: authed.uid,
        //   user: authed.email.split('@')[0],
        //   admin: true
        // };
        setUser(false);
        setAdmin(true);
      } else if (authed && authed.uid !== process.env.REACT_ADMIN_UID) {
        // const userObj = {
        //   fullName: authed.displayName,
        //   profilePicture: authed.photoURL,
        //   uid: authed.uid,
        //   user: authed.email.split('@')[0],
        //   admin: false
        // };
        setAdmin(false);
        setUser(true);
      } else if ((admin || admin === null) || (user || user === null)) {
        setUser(false);
        setAdmin(false);
      }
    });
  }, []);

  return (
    <div className='App'>
    <Router>
      <NavBar
      user={user}
      admin={admin}
      />
      <Routes
      user={user}
      admin={admin}
      />
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
