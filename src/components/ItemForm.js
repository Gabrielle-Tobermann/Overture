import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

function ItemForm() {
  return (
    <div>
     <Form>
      <FormGroup>
        <Label for="itemType">Item Type:</Label>
        <Input type="text" name="itemType" id="itemType" placeholder="Instrument or bow" />
      </FormGroup>
      <FormGroup>
        <Label for="itemPrice">Price:</Label>
        <Input type="text" name="price" id="itemPrice" placeholder="Price" />
      </FormGroup>
      <FormGroup>
        <Label for="itemSize">Size:</Label>
        <Input type="text" name="size" id="itemSize" placeholder="Size" />
      </FormGroup>
      <FormGroup>
        <Label for="item">Picture:</Label>
        <Input type="url" name="image" id="itemImage" placeholder="Enter link to picture" />
      </FormGroup>
      <FormGroup>
        <Label for="itemID">ID of item:</Label>
        <Input type="text" name="itemID" id="itemID" placeholder="Item ID" />
      </FormGroup>
      <FormGroup>
        <Label for="itemMaterial">Material:</Label>
        <Input type="text" name="material" id="itemMaterial" placeholder="Material" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="rental"/>
          Rental?
        </Label>
        </FormGroup>
        <FormGroup check>
        <Label check>
          <Input type="checkbox" name="available"/>
          Available?
        </Label>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default ItemForm;
