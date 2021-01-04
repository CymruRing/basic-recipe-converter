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

  allowTitleEdit() {
    this.setState({hasTitle: false});
  }

  // set app recipe state from RecipeForm component
  setNewIngredient(newIngredient) {
    let temp = this.state.ingredients.concat(newIngredient);
    this.setState({ingredients: temp});
  } 

  deleteIngredient(ingredient) {
    let temp = this.state.ingredients;
    let result = [];
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].ingredient !== ingredient) {
        result.push(temp[i])
      }
    }
    this.setState({ingredients: result});
  };

  render() {
    return (
      <div className='main'>
        <h1 className='title'>Recipe Converter</h1>
        <div className='navBar'>
        </div> 
        <div>
          <RecipeTitle 
          hasTitle={this.state.hasTitle} 
          title={this.state.title} 
          setTitle={this.setTitle.bind(this)} 
          allowTitleEdit={this.allowTitleEdit.bind(this)}  
        />
        </div>
          <Recipe ingredients={this.state.ingredients} deleteIngredient={this.deleteIngredient.bind(this)}/>
        <div>
          <RecipeForm pushIngredient={this.setNewIngredient.bind(this)}/>
        </div>
      </div>
    );
  }
}; 

export default App;