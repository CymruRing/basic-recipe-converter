import React from 'react';
import axios from 'axios';

import styles from '../converterStyles.css';

import RecipeForm from './RecipeForm.jsx';
import RecipeTitle from './RecipeTitle.jsx';
import Recipe from './Recipe.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasTitle: false,
      title: '',
      ingredients: [],
    };
  }

  // set app title state from RecipeTitle component 
  setTitle(title) {
    this.setState({title: title, hasTitle: true});
  }

  // set app recipe state from RecipeForm component
  setNewIngredient(newIngredient) {
    let temp = this.state.ingredients.concat(newIngredient);
    this.setState({ingredients: temp});
  } 

  render() {
    return (
      <div className='main'>
        <h1 className='title'>Recipe Converter</h1>
        <div className='navBar'>
        </div> 
        <div>
          <RecipeTitle hasTitle={this.state.hasTitle} title={this.state.title} setTitle={this.setTitle.bind(this)} />
        </div>
          <Recipe ingredients={this.state.ingredients} />
        <div>
          <RecipeForm pushIngredient={this.setNewIngredient.bind(this)}/>
        </div>
      </div>
    );
  }
}; 

export default App;