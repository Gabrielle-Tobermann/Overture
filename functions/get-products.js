const axios = require('axios');

const getProducts = () => new Promise((resolve, reject) => {
  axios.get('https://overture-7097e-default-rtdb.firebaseio.com/items.json')
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

exports.handler = async () => {
  const data = await getProducts();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};

module.exports = getProducts;
