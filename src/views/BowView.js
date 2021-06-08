import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import getItems from '../helpers/data/itemsData';
import ItemCard from '../components/ItemCard';

function BowView({ items, setItems }) {
  useEffect(() => {
    getItems().then((resp) => setItems(resp));
  }, []);

  return (
    <div>
      <h1>Bow Inventory</h1>
      {
        items.map((item) => (
          item.itemType === 'bow'
            ? <ItemCard
            key={item.firebaseKey}
            itemID={item.itemID}
            />
            : ''
        ))
      }
    </div>
  );
}

BowView.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired
};

export default BowView;
