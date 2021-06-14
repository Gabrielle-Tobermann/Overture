import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import ItemCard from '../components/ItemCard';
import ItemForm from '../components/ItemForm';

function InstrumentView({ items, setItems }) {
  const [adding, setAdding] = useState(false);

  const handleButtonClick = () => {
    setAdding(true);
  };

  return (
    <div>
      <h1>Instrument Inventory</h1>
      <Button onClick={handleButtonClick}>+</Button>
      {adding && <ItemForm
      setItems={setItems}
      items={items}
      />}
      {
        items.map((item) => (
          item.itemType === 'instrument'
            ? <ItemCard
            key={item.firebaseKey}
            itemID={item.itemID}
            image={item.image}
            type={item.type}
            size={item.size}
            rental={item.rental}
            price={item.price}
            available={item.available}
            firebaseKey={item.firebaseKey}
            setItems={setItems}
            items={items}
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
