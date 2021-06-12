import axios from 'axios';

const products = axios.get('https://overture-7097e-default-rtdb.firebaseio.com/items')
  .then((response) => response.json())
  .catch((error) => console.warn(error));

console.warn(products);

exports.handler = async () => ({
  statusCode: 200,
  body: JSON.stringify(products)
});
