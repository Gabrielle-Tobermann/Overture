import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

function OrderForm() {
  const [itemInput, setItemInput] = useState([{
    itemID: ''
  }]);

  const addNewField = () => {
    
  }
  return (
    <div>
       <Form>
       <FormGroup>
        <Label for="fullName">Customer`&apos;s Full Name:</Label>
        <Input type="text" name="fullName" id="fullName" placeholder="Enter name" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Customer`&apos;s Email:</Label>
        <Input type="email" name="email" id="email" placeholder="Enter email" />
      </FormGroup>
      <div>
        {
          itemInput.map((item, i) => (
            <>
              <FormGroup key={i}>
              <Label for="item">Item</Label>
              <Input type="text" name="itemID" id={`item${i}`} placeholder="Enter item ID" value={item.itemID}/>
              </FormGroup>
              <Button onClick={addNewField}>+</Button>
              <Button onClick={removeField}>-</Button>
            </>
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
