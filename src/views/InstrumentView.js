import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'reactstrap';
import ItemCard from '../components/ItemCard';
import ItemForm from '../components/ItemForm';
import {
  CardContainer, InstrumentCard, InstrumentTitle, ViewTitle, WholeCardContainer
} from '../styles/itemCardStyle';

function InstrumentView({ items, setItems }) {
  const [adding, setAdding] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleButtonClick = () => {
    setAdding(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div>
        <ViewTitle>Instrument Inventory</ViewTitle>
        <Input placeholder='Search' value={searchTerm} onChange={handleSearchChange}></Input>
      </div>
      <Button color="dark" style={{ fontSize: '20px' }} onClick={handleButtonClick}>+</Button>
      {adding && <ItemForm
      setItems={setItems}
      items={items}
      />}
      { searchTerm === ''
        ? ''
        : items.filter((item) => item.itemType === 'instrument' && item.itemID.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
          <ItemCard
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
            />
        ))
      }
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
