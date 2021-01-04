import React, { useState } from 'react';
import Proportions from './Proportions.jsx';
const Recipe = (props) => {
  const [proportion, setProportion] = useState(1);

  const updateHook = (newProportion) => {
    setProportion(proportion => newProportion);
  };

  return (

    <div>
      <Proportions pushProChange={updateHook} />
      <ul>
        {props.ingredients.map((aIngredient) => (
          <li key={aIngredient.ingredient} >
            {aIngredient.ingredient} {Number(aIngredient.quantity) * proportion} {aIngredient.measurement}
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default Recipe;