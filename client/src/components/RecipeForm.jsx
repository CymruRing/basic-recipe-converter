import React from 'react';

import Ingredient from './Ingredient.jsx';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      ingredient: '',
      quantity: 0,
      measurement: ''
    };
    //pushIngredient = this.props.pushIngredient;
    this.addIngredient.bind(this);
  }
  // push values to the app and reset fields
  addIngredient() {
    // test valid inputs ...
    // push to main
    console.log(state);
    //this.props.pushIngredient(this.state);

    // clear fields

  }

  inputHandler(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <span> 
          <input id='ingredient' onChange={this.inputHandler.bind(this)} placeholder='ingredient'></input>
          <input id='quantity' onChange={this.inputHandler.bind(this)} placeholder='quantity'></input>
          <select>
            <option id='measurement' onChange={this.inputHandler.bind(this)} select='selected'>measurement</option>
            <option>tsp</option>
            <option>tbsp</option>
            <option>cup</option>
          </select>
        </span>
        <div>
          <button onClick={this.addIngredient}>Add Ingredient</button>
        </div>
      </div>

    );
  }
}

export default RecipeForm;