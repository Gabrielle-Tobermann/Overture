import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import ItemCard from '../components/ItemCard';
import ItemForm from '../components/ItemForm';
import {
  CardContainer,
  WholeCardContainer,
  InstrumentTitle,
  InstrumentCard,
  ViewTitle,
  TopContainer,
  ButtonSearchContainer,
  SearchInput
} from '../styles/ItemsStyle';

function BowView({ items, setItems }) {
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
       <TopContainer>
        <ViewTitle>Bow Inventory</ViewTitle>
      <ButtonSearchContainer>
        <Button color="dark" style={{ fontSize: '20px', fontWeight: 'bold' }} onClick={handleButtonClick}>+</Button>
        <SearchInput placeholder='Search' value={searchTerm} onChange={handleSearchChange}></SearchInput>
      </ButtonSearchContainer>
      </TopContainer>
      {adding && <ItemForm
      setItems={setItems}
      items={items}
      />}
       { searchTerm === ''
         ? ''
         : items.filter((item) => item.itemType === 'bow' && item.itemID.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
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
          <InstrumentTitle>Violin Bows</InstrumentTitle>
          <InstrumentCard>
      {
        items.map((item) => (
          (item.itemType === 'bow') && (item.type === 'violin')
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
          <InstrumentTitle>Viola Bows</InstrumentTitle>
          <InstrumentCard>

      {
        items.map((item) => (
          (item.itemType === 'bow') && (item.type === 'viola')
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
          <InstrumentTitle>Cello Bows</InstrumentTitle>
          <InstrumentCard>
      {
        items.map((item) => (
          (item.itemType === 'bow') && (item.type === 'cello')
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
          (item.itemType === 'bow') && (item.type === 'double bass')
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

BowView.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired
};

export default BowView;
