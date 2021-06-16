import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/items.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/items.json`, itemObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/items/${response.data.name}.json`, body)
        .then(() => {
          getItems().then((resp) => resolve(resp));
        });
    }).catch((error) => reject(error));
});

const deleteItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/items/${firebaseKey}.json`)
    .then(() => {
      getItems().then((resp) => resolve(resp));
    }).catch((error) => reject(error));
});

const updateItem = (itemObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/items/${itemObj.firebaseKey}.json`, itemObj)
    .then(() => {
      getItems().then((resp) => resolve(resp));
    }).catch((error) => reject(error));
});

export {
  getItems, createItem, deleteItem, updateItem
};
