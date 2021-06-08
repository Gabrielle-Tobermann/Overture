import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import getItems from '../helpers/data/itemsData';
import ItemCard from '../components/ItemCard';

function InstrumentView({ items, setItems }) {
  useEffect(() => {
    getItems().then((resp) => setItems(resp));
  }, []);

  return (
    <div>
      <h1>Instrument Inventory</h1>
      {
        items.map((item) => (
          item.itemType === 'instrument'
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

InstrumentView.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired
};

export default InstrumentView;
