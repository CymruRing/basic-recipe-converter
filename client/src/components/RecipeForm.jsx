import React from 'react';

import Ingredient from './Ingredient.jsx';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],

    };
  }


  render() {
    return (
      <div>
        <input placeholder='Recipe Title'></input>
        <div>
          <Ingredient />
        </div>
        <button>Add Ingredient</button>
      </div>

    );
  }
}

export default RecipeForm;