import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

function OrderForm() {
  const [itemInputs, setItemInputs] = useState([{
    itemID: '', id: uuidv4()
  }]);

  const addNewField = () => {
    setItemInputs([...itemInputs, { id: uuidv4(), itemID: '' }]);
  };

  const removeField = (id) => {
    const inputs = [...itemInputs];
    inputs.splice(inputs.findIndex((element) => element.id === id));
    setItemInputs(inputs);
  };

  const handleItemInputChange = (id, e) => {
    const newInputs = itemInputs.map((element) => {
      if (id === element.id) {
        const el = element;
        el[e.target.name] = e.target.value;
      }
      console.warn(e.target.value);
      return element;
    });
    setItemInputs(newInputs);
    console.warn(newInputs);
  };
  return (
    <div>
       <Form>
       <FormGroup>
        <Label for="fullName">Customer&apos;s Full Name:</Label>
        <Input type="text" name="fullName" id="fullName" placeholder="Enter name" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Customer&apos;s Email:</Label>
        <Input type="email" name="email" id="email" placeholder="Enter email" />
      </FormGroup>
      <div>
        {
          itemInputs.map((item) => (
            <div key={item.id}>
              <FormGroup>
              <Label for="item">Item</Label>
              <Input type="text"
              name="itemID"
              id={item.id}
              placeholder="Enter item ID"
              value={item.itemID}
              onChange={(e) => handleItemInputChange(item.id, e)}
              />
              </FormGroup>
              <Button onClick={addNewField}>+</Button>
              <Button onClick={removeField}>-</Button>
            </div>
          ))
        }
      </div>
      <FormGroup>
        <Label for="email">Insurance Amount:</Label>
        <Input type="text" name="insurance" id="insurance" placeholder="Enter insurance amount" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Payment Amount:</Label>
        <Input type="text" name="insurance" id="insurance" placeholder="Enter insurance amount" />
      </FormGroup>
      <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default OrderForm;
