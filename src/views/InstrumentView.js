import React, { useEffect } from 'react';
import getItems from '../helpers/data/itemsData';

export default function InstrumentView() {
  useEffect(() => {
    getItems().then((resp) => console.warn(resp));
  }, []);

  return (
    <div>
      <h1>Instruement Inventory</h1>
    </div>
  );
}
