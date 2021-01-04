import React from 'react';

const Recipe = (props) => {
  return (
    <ul>
      {props.ingredients.map((aIngredient) => (
        <li key={aIngredient.ingredient} >{aIngredient.ingredient} {aIngredient.quantity} {aIngredient.measurement}</li>
      ))}
    </ul>
  );
};

export default Recipe;