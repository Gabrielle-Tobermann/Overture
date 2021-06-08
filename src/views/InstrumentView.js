import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import ItemCard from '../components/ItemCard';
import ItemForm from '../components/ItemForm';

function InstrumentView({ items }) {
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    console.warn('instrument view');
  }, []);

  const handleButtonClick = () => {
    setAdding(true);
    console.warn('adding', adding);
  };

  return (
    <div>
      <h1>Instrument Inventory</h1>
      <Button onClick={handleButtonClick}>+</Button>
      {adding && <ItemForm/>}
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
