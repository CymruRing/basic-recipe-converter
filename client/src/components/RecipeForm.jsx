import React from 'react';
// move to hooks
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
  }

  // push values to the app and reset fields
  addIngredient() {
    console.log('addIngredient');
    // test valid inputs ...
    // push to app
    console.log(this.state);
    this.props.pushIngredient(this.state, () => {
      this.setState({ingredient: '', quantity: '', measurement: 0});
    });
    // clear fields
    
  }

  inputHandler(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  optionHandler(option) {

  }

  render() {
    return (
      <div>
        <span> 
          <input id='ingredient' onChange={this.inputHandler.bind(this)} 
          placeholder='ingredient' value={this.state.ingredient}></input>
          <input id='quantity' onChange={this.inputHandler.bind(this)} placeholder='quantity'></input>
          <select>
            <option id='measurement' onChange={this.inputHandler.bind(this)} select='selected'>measurement</option>
            <option>tsp</option>
            <option>tbsp</option>
            <option>cup</option>
          </select>
        </span>
        <div>
          <button onClick={this.addIngredient.bind(this)}>Add Ingredient</button>
        </div>
      </div>

    );
  }
};

export default RecipeForm;