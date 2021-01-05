import React, { useState } from 'react';
import Proportions from './Proportions.jsx';
const Recipe = (props) => {
  const [proportion, setProportion] = useState(1);
  const [highlightEdit, setHighlightEdit] = useState('edit');

  // change hook value from Proportions.jsx
  const updateHook = (newProportion) => {
    setProportion(proportion => newProportion);
  };

  // delete an Ingredient
  const deleteIngredient = (event) => {
    props.deleteIngredient(event.target.id)
  };
  
  if (props.ingredients.length === 0) {
    return (
      <div>
        <div id='ingredientPlaceHolder'>Your Ingredients will go here!</div>
        <Proportions pushProChange={updateHook} />
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          {props.ingredients.map((aIngredient) => (
            <li key={aIngredient.ingredient} 
              id={aIngredient.ingredient} onClick={deleteIngredient}>
              {aIngredient.ingredient} {Number(aIngredient.quantity) * proportion} {aIngredient.measurement}
              <span 
                className={highlightEdit}
                id={aIngredient.ingredient}
                onMouseEnter={() => setHighlightEdit('editHover')}
                onMouseLeave={() => setHighlightEdit('edit')}
              >delete
              </span>
            </li>
          ))}
        </ul> 
        <Proportions pushProChange={updateHook} />
      </div>
    );
  }
};

export default Recipe;