import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import ItemCard from '../components/ItemCard';
import ItemForm from '../components/ItemForm';
import {
  CardContainer, InstrumentCard, InstrumentTitle, ViewTitle, WholeCardContainer
} from '../styles/itemCardStyle';

function InstrumentView({ items, setItems }) {
  const [adding, setAdding] = useState(false);

  const handleButtonClick = () => {
    setAdding(true);
  };

  return (
    <div>
      <ViewTitle>Instrument Inventory</ViewTitle>
      <Button color="dark" onClick={handleButtonClick}>+</Button>
      {adding && <ItemForm
      setItems={setItems}
      items={items}
      />}
      <WholeCardContainer>
        <CardContainer>
          <InstrumentTitle>Violins</InstrumentTitle>
          <InstrumentCard>
      {
        items.map((item) => (
          (item.itemType === 'instrument') && (item.type === 'violin')
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
            itemType={item.itemType}
            material={item.material}
            />
            : ''
        ))
      }
          </InstrumentCard>
      </CardContainer>
        <CardContainer>
          <InstrumentTitle>Violas</InstrumentTitle>
          <InstrumentCard>

      {
        items.map((item) => (
          (item.itemType === 'instrument') && (item.type === 'viola')
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
            itemType={item.itemType}
            material={item.material}
            />
            : ''
        ))
      }
          </InstrumentCard>
        </CardContainer>
        <CardContainer>
          <InstrumentTitle>Cellos</InstrumentTitle>
          <InstrumentCard>
      {
        items.map((item) => (
          (item.itemType === 'instrument') && (item.type === 'cello')
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
            itemType={item.itemType}
            material={item.material}
            />
            : ''
        ))
      }
          </InstrumentCard>
        </CardContainer>
        <CardContainer>
          <InstrumentTitle>Double Basses</InstrumentTitle>
          <InstrumentCard>
      {
        items.map((item) => (
          (item.itemType === 'instrument') && (item.type === 'double bass')
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
            itemType={item.itemType}
            material={item.material}
            />
            : ''
        ))
      }
          </InstrumentCard>
        </CardContainer>
      </WholeCardContainer>
    </div>
  );
}

InstrumentView.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired
};

export default InstrumentView;
