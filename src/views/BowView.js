import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../components/ItemCard';

function BowView({ items }) {
  useEffect(() => {
    console.warn('bow view');
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
