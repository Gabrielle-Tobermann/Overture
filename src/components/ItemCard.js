import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody
} from 'reactstrap';
import { ButtonContainer, PopImage, Ulist } from '../styles/ItemsStyle';
import { deleteItem } from '../helpers/data/itemsData';
import ItemForm from './ItemForm';

function ItemCard({
  itemID,
  image,
  type,
  size,
  rental,
  price,
  available,
  firebaseKey,
  setItems,
  items,
  itemType,
  material
}) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  const handleButtonClick = (caseType) => {
    switch (caseType) {
      case 'Delete':
        deleteItem(firebaseKey).then((resp) => setItems(resp));
        break;
      case 'Edit':
        setEditing(!editing);
        break;
      default:
        console.warn('Nothing was selected');
    }
  };

  return (
    <div style={{ width: 'min-content', margin: '2%' }}>
        <Card body style={{ width: 'fit-content', border: 'solid 1px black' }}>
          <button className='cardButton' id={itemID}>{itemID}</button>
          <Popover
            placement="right"
            isOpen={popoverOpen}
            target={itemID}
            toggle={toggle}
            >
            <PopoverHeader>{itemID}</PopoverHeader>
            <PopoverBody>
              <Ulist>
               <PopImage src={image}/>
               <li>{type}</li>
               <li>{size}</li>
               {
                <li>{material}</li>
               }
               <li>{rental ? 'rental' : 'purchase'}</li>
               <li>${price}</li>
               <li>{available ? 'Available' : 'Not available'}</li>
              </Ulist>
              <ButtonContainer>
                <Button color="dark" className="rounded-pill" onClick={() => handleButtonClick('Edit')}>Edit</Button>
                <Button color="dark" className="rounded-pill" onClick={() => handleButtonClick('Delete')}>Delete</Button>
              </ButtonContainer>
            </PopoverBody>
          </Popover>
        </Card>
    {
    editing && <ItemForm
                items={items}
                setItems={setItems}
                available={available}
                firebaseKey={firebaseKey}
                image={image}
                itemID={itemID}
                itemType={itemType}
                material={material}
                price={price}
                rental={rental}
                size={size}
                type={type}
                />
    }
    </div>
  );
}

ItemCard.propTypes = {
  itemID: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  rental: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  firebaseKey: PropTypes.string,
  setItems: PropTypes.func,
  items: PropTypes.array,
  itemType: PropTypes.string,
  material: PropTypes.string,
};

export default ItemCard;
