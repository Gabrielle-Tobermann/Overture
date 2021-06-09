import React from 'react';
import PropTypes from 'prop-types';

function DefineItemID({ items }) {
  const defineID = () => {
    const cellos = items.map((element) => {
      if (element.type === 'cello') {
        element.split('C')[1].sort((a, b) => a - b);
      }
      return element;
    });
    console.warn(cellos);
  };

  return (
    <div>
      <p>item iDs</p>
      <p>{defineID}</p>
    </div>
  );
}

// const defineItemID = (items) => {
//   // let violinIDs = '';
//   // let violaIDs = '';
//   // let celloIDs = '';
//   // let doubleBasseIDs = '';
//   const cellos = items.map((element) => {
//     if (element.type === 'cello') {
//       element.split('C')[1].sort((a, b) => a - b);
//     }
//     return element;
//   });
//   console.warn(cellos);
//   // const violas = items.map((element) => {
//   //   element.type === 'viola';
//   // const cellos = items.map((element) => {//   //   element.type === 'cello';
//   // const doubleBasses = items.map((element) => {
//   //   element.type === 'double bass';

//   // switch (item.itemType) {
//   //   case 'violin':
//   //    violinIDs = violins.map((element) => {
//   //      element.itemID.split('V')[1];
//   //    })
//   //     });
// };

DefineItemID.propTypes = {
  items: PropTypes.array
};

export default DefineItemID;
