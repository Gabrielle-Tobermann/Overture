import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import ItemCard from '../components/ItemCard';
import ItemForm from '../components/ItemForm';

function BowView({ items, setItems }) {
  const [adding, setAdding] = useState(false);

  const handleButtonClick = () => {
    setAdding(true);
  };

  return (
    <div>
      <h1>Bow Inventory</h1>
      <Button onClick={handleButtonClick}>+</Button>
      {adding && <ItemForm
      setItems={setItems}
      items={items}
      />}
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
