import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { createItem, updateItem } from '../helpers/data/itemsData';

function ItemForm({
  setItems,
  items,
  available,
  firebaseKey,
  image,
  itemID,
  itemType,
  material,
  price,
  rental,
  size,
  type
}) {
  const [elementID, setElementID] = useState('');
  const [item, setItem] = useState({
    itemType: itemType || '',
    itemID: itemID || elementID,
    price: price || '',
    size: size || '',
    type: type || '',
    available: available || false,
    rental: rental || false,
    material: material || '',
    image: image || '',
    firebaseKey: firebaseKey || null
  });

  const defineID = () => {
    const cellos = items.filter((element) => element.type === 'cello' && element.itemType === 'instrument');
    const celloIDs = cellos.map((element) => element.itemID.split('C')[1]);
    const celloID = celloIDs.length ? `C${Number(celloIDs[(celloIDs.length - 1)]) + 1}` : 'C1';

    const violins = items.filter((element) => element.type === 'violin' && element.itemType === 'instrument');
    const violinIDs = violins.map((element) => element.itemID.split('V')[1]);
    const violinID = violinIDs.length ? `V${Number(violinIDs[(violinIDs.length - 1)]) + 1}` : '1';

    const violas = items.filter((element) => element.type === 'viola' && element.itemType === 'instrument');
    const violaIDs = violas.map((element) => element.itemID.split('VA')[1]);
    const violaID = violaIDs.length ? `VA${Number(violaIDs[(violaIDs.length - 1)]) + 1}` : '1';

    const doubleBasses = items.filter((element) => element.type === 'double bass' && element.itemType === 'instrument');
    const doubleBassIDs = doubleBasses.map((element) => element.itemID.split('DB')[1]);
    const doubleBassID = doubleBassIDs.length ? `DB${Number(doubleBassIDs[(doubleBassIDs.length - 1)]) + 1}` : 'DB1';

    const celloBows = items.filter((element) => element.type === 'cello' && element.itemType === 'bow');
    const celloBowIDs = celloBows.map((element) => element.itemID.split('CB')[1]);
    const celloBowID = celloBowIDs.length ? `CB${Number(celloBowIDs[(celloBowIDs.length - 1)]) + 1}` : 'CB1';

    const violinBows = items.filter((element) => element.type === 'violin' && element.itemType === 'bow');
    const violinBowIDs = violinBows.map((element) => element.itemID.split('VB')[1]);
    const violinBowID = violinBowIDs.length ? `VB${Number(violinBowIDs[(violinBowIDs.length - 1)]) + 1}` : 'VB1';

    const violaBows = items.filter((element) => element.type === 'viola' && element.itemType === 'bow');
    const violaBowIDs = violaBows.map((element) => element.itemID.split('VAB')[1]);
    const violaBowID = violaBowIDs.length ? `VAB${Number(violaBowIDs[(violaBowIDs.length - 1)]) + 1}` : 'VAB1';

    const doubleBassBows = items.filter((element) => element.type === 'double bass' && element.itemType === 'bow');
    const doubleBassBowIDs = doubleBassBows.map((element) => element.itemID.split('DBB')[1]);
    const doubleBassBowID = doubleBassBowIDs.length ? `DBB${Number(doubleBassBowIDs[(doubleBassBowIDs.length - 1)]) + 1}` : 'DBB1';

    switch (true) {
      case (item.type === 'cello') && (item.itemType === 'instrument'):
        setElementID(celloID);
        break;
      case (item.type === 'violin') && (item.itemType === 'instrument'):
        setElementID(violinID);
        break;
      case (item.type === 'viola') && (item.itemType === 'instrument'):
        setElementID(violaID);
        break;
      case (item.type === 'double bass') && (item.itemType === 'instrument'):
        setElementID(doubleBassID);
        break;
      case (item.type === 'cello') && (item.itemType === 'bow'):
        setElementID(celloBowID);
        break;
      case (item.type === 'violin') && (item.itemType === 'bow'):
        setElementID(violinBowID);
        break;
      case (item.type === 'viola') && (item.itemType === 'bow'):
        setElementID(violaBowID);
        break;
      case (item.type === 'double bass') && (item.itemType === 'bow'):
        setElementID(doubleBassBowID);
        break;
      default:
        setElementID('');
    }
    setItem((prevState) => ({
      ...prevState,
      itemID: elementID
    }));
  };

  const handleInputChange = (e) => {
    if (item.firebaseKey === null) {
      defineID();
    }
    setItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'available' || e.target.name === 'rental' ? e.target.checked : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.firebaseKey) {
      updateItem(item).then((resp) => setItems(resp));
    } else {
      createItem(item).then((resp) => setItems(resp));
    }
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
        <Input type="text" name="type" id="type" placeholder="violin, viola, cello, double bass" value={item.type} onChange={handleInputChange}/>
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
        <Input type="text" name="itemID" id="itemID" value={item.firebaseKey ? itemID : elementID} onChange={handleInputChange}/>
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
        <Button onClick={handleSubmit} type="submit">Submit</Button>
      </Form>
    </div>
    </>
  );
}

ItemForm.propTypes = {
  setItems: PropTypes.func,
  items: PropTypes.array,
  available: PropTypes.bool,
  firebaseKey: PropTypes.string,
  image: PropTypes.string,
  itemID: PropTypes.string,
  itemType: PropTypes.string,
  material: PropTypes.string,
  price: PropTypes.string,
  rental: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string
};

export default ItemForm;
