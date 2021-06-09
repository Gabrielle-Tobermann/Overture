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

function ItemForm({ setItems, items }) {
  const [instrumentID, setInstrumentID] = useState('');
  const [item, setItem] = useState({
    itemType: '',
    itemID: instrumentID,
    price: '',
    size: '',
    type: '',
    available: false,
    rental: false,
    material: '',
    image: ''
  });

  const defineID = () => {
    const cellos = items.filter((element) => element.type === 'cello' || element.type === 'Cello');
    const celloIDs = cellos.map((element) => element.itemID.split('C')[1]);
    const celloID = celloIDs.length ? `C${Number(celloIDs[(celloIDs.length - 1)]) + 1}` : 'C1';
    const violins = items.filter((element) => element.type === 'violin' || element.type === 'Violin');
    const violinIDs = violins.map((element) => element.itemID.split('V')[1]);
    const violinID = violinIDs.length ? `V${Number(violinIDs[(violinIDs.length - 1)]) + 1}` : '1';
    const violas = items.filter((element) => element.type === 'viola' || element.type === 'Viola');
    const violaIDs = violas.map((element) => element.itemID.split('VA')[1]);
    const violaID = violaIDs.length ? `VA${Number(violaIDs[(violaIDs.length - 1)]) + 1}` : '1';
    const doubleBasses = items.filter((element) => element.type === 'double bass' || element.type === 'Double Bass');
    const doubleBassIDs = doubleBasses.map((element) => element.itemID.split('DB')[1]);
    const doubleBassID = doubleBassIDs.length ? `DB${Number(doubleBassIDs[(doubleBassIDs.length - 1)]) + 1}` : '1';
    let elementID = '';

    switch (item.type) {
      case 'cello':
        elementID = celloID;
        break;
      case 'violin':
        elementID = violinID;
        break;
      case 'viola':
        elementID = violaID;
        break;
      case 'double bass':
        elementID = doubleBassID;
        break;
      default:
        elementID = '';
    }
    return elementID;
  };

  const handleInputChange = (e) => {
    setInstrumentID(defineID());
    setItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'available' || e.target.name === 'rental' ? e.target.checked : e.target.value
    }));
    console.warn(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(item);
    createItem(item).then((resp) => setItems(resp));
  };

  return (
    <>
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
        <Label for="itemMaterial">Material:</Label>
        <Input type="text" name="material" id="itemMaterial" placeholder="Material" value={item.material} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="itemID">Item ID:</Label>
        <Input type="text" name="itemID" id="itemID" value={instrumentID} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup>
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
        <p>{instrumentID}</p>
        <Button onClick={handleSubmit} type="submit">Submit</Button>
      </Form>
    </div>
    </>
  );
}

ItemForm.propTypes = {
  setItems: PropTypes.func,
  items: PropTypes.array
};

export default ItemForm;
