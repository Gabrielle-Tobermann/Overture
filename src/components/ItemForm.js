import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { createItem } from '../helpers/data/itemsData';

function ItemForm({ setItems }) {
  const [item, setItem] = useState({
    itemType: '',
    itemID: '',
    price: '',
    size: '',
    type: '',
    available: false,
    rental: false,
    material: '',
    image: ''
  });

  const handleInputChange = (e) => {
    setItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'available' || e.target.name === 'rental' ? e.target.checked : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createItem(item).then((resp) => setItems(resp));
    console.warn(item);
  };

  return (
    <div>
     <Form>
      <FormGroup>
        <Label for="itemType">Item Type:</Label>
        <Input type="text" name="itemType" id="itemType" placeholder="Instrument or bow" onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="itemPrice">Price:</Label>
        <Input type="text" name="price" id="itemPrice" placeholder="Price" value={item.price} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="itemSize">Size:</Label>
        <Input type="text" name="size" id="itemSize" placeholder="Size" value={item.size} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="type">Type:</Label>
        <Input type="text" name="type" id="type" placeholder="Violin, Viola, Cello, Double Bass" value={item.type} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="item">Picture:</Label>
        <Input type="url" name="image" id="itemImage" placeholder="Enter link to picture" value={item.image} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="itemID">ID of item:</Label>
        <Input type="text" name="itemID" id="itemID" placeholder="Item ID" value={item.itemID} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="itemMaterial">Material:</Label>
        <Input type="text" name="material" id="itemMaterial" placeholder="Material" value={item.material} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="rental" value={item.rental} onChange={handleInputChange}/>
          Rental?
        </Label>
        </FormGroup>
        <FormGroup check>
        <Label check>
          <Input type="checkbox" name="available" value={item.available} onChange={handleInputChange}/>
          Available?
        </Label>
        </FormGroup>
        <Button onClick={handleSubmit} type="submit">Submit</Button>
      </Form>
    </div>
  );
}

ItemForm.propTypes = {
  setItems: PropTypes.func
};

export default ItemForm;
