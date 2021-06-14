import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Button,
  Row,
  Col,
  Popover,
  PopoverHeader,
  PopoverBody
} from 'reactstrap';
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
  items
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
    <div>
       <Row>
      <Col sm="6">
        <Card body>
          <Button id={itemID}>{itemID}</Button>
          <Popover
            placement="right"
            isOpen={popoverOpen}
            target={itemID}
            toggle={toggle}
            >
            <PopoverHeader>{itemID}</PopoverHeader>
            <PopoverBody>
              <ul>
               <img src={image}/>
               <li>{type}</li>
               <li>{size}</li>
               <li>{rental ? 'rental' : 'purchase'}</li>
               <li>{price}</li>
               <li>{available ? 'Available' : 'Not available'}</li>
              </ul>
              <Button onClick={() => handleButtonClick('Edit')}>Edit</Button>
              <Button onClick={() => handleButtonClick('Delete')}>Delete</Button>
            </PopoverBody>
          </Popover>
        </Card>
      </Col>
    </Row>
    {
    editing && <ItemForm
                items={items}
                setItems={setItems}
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
};

export default ItemCard;
