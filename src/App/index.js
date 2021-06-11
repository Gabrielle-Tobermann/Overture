import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Footer from '../components/Footer';
import Routes from '../helpers/routes';
import NavBar from '../components/Navbar';
import './App.scss';
import { getItems } from '../helpers/data/itemsData';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setUser(false);
        setAdmin(true);
      } else if (authed && authed.uid !== process.env.REACT_ADMIN_UID) {
        setAdmin(false);
        setUser(true);
      } else if ((admin || admin === null) || (user || user === null)) {
        setUser(false);
        setAdmin(false);
      }
    });
  }, []);

  useEffect(() => {
    getItems().then((resp) => setItems(resp));
  }, []);

  return (
    <div className='App'>
    <Router>
      <NavBar
      user={user}
      admin={admin}
      />
      <Elements stripe={stripePromise}>
        <Routes
        user={user}
        admin={admin}
        items={items}
        setItems={setItems}
        />
      </Elements>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
