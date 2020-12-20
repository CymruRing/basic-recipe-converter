import React from 'react';
import axios from 'axios';
//import { render } from 'react-dom';
import styles from '../converterSyles.css';

import RecipeForm from './RecipeForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='main'>
        <h1 className='title'>Recipe Converter</h1>
        <div className='navBar'>
        </div>
        <RecipeForm />
      </div>
    );
  }
};

export default App;