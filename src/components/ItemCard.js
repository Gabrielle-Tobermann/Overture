import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  Row,
  Col
} from 'reactstrap';

function ItemCard({ itemID }) {
  return (
    <div>
       <Row>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">{itemID}</CardTitle>
        </Card>
      </Col>
    </Row>
    </div>
  );
}

ItemCard.propTypes = {
  itemID: PropTypes.string.isRequired
};

export default ItemCard;
