import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orders.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/orders.json`, orderObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/orders/${response.data.name}.json`, body);
    }).then(() => {
      getOrders().then((resp) => resolve(resp));
    }).catch((error) => reject(error));
});

const deleteOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/orders/${firebaseKey}.json`)
    .then(() => {
      getOrders().then((resp) => resolve(resp));
    }).catch((error) => reject(error));
});

export { getOrders, createOrder, deleteOrder };
