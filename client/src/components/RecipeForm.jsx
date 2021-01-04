import React from 'react';

// handle new ingredient inputs

class RecipeForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      ingredient: '',
      quantity: '',
      measurement: ''
    };
  }

  // push values to the app and reset fields
  addIngredient() {
    // test valid inputs 
      // ...
    // push to app
    let temp = this.state;
    this.props.pushIngredient(temp);
    // clear fields
    this.setState({ingredient: '', quantity: '', measurement: 'measurement'});

  }
  // change state as inputs change
  inputHandler(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <span> 
          <input 
            id='ingredient' 
            onChange={this.inputHandler.bind(this)} 
            placeholder='ingredient' 
            value={this.state.ingredient}
            ></input>
          <input 
            id='quantity'
            onChange={this.inputHandler.bind(this)}
            placeholder='quantity'
            value={this.state.quantity}
            ></input>
          <select 
            id='measurement' 
            onChange={this.inputHandler.bind(this)}
            value={this.state.measurement}
            >
            <option value='measurement'>measurement</option>
            <option value='tsp'>tsp</option>
            <option value='tbsp'>tbsp</option>
            <option value='cup'>cup</option>
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