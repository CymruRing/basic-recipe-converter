import React from 'react';

const Ingredient = (props) => {


  return (
    <span> 
      <input placeholder='ingredient'></input>
      <input placeholder='quantity'></input>
      <select>
        <option select='selected'>measurement</option>
        <option>tsp</option>
        <option>tbsp</option>
        <option>cup</option>
      </select>
    </span>

  );

};

export default Ingredient;