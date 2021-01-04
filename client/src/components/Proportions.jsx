import React, { useState } from 'react';

// handle proportion input and push to Recipe when enter is button is clicked
const Proportions = (props) => {
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(input => event.target.value);
  };

  const enterHandler = () => {
    // validate input
      let temp = input;
      if (temp.includes('/')) {
        console.log(typeof temp);
        let fraction = temp.split("/");
        console.log(fraction);
        temp = Number(fraction[0] / Number(fraction[1]));
      }
      if (!Number(temp)) {
        console.log('catch invalid input error');
        window.alert('Invalid Input in Proportion Box: \ntry a number or fraction');
      } else {
        props.pushProChange(temp);
      }
  };

  return (
    <span>
      <input 
        id='input' 
        placeholder='Proportion' 
        onChange={inputHandler}>
      </input>
      <button onClick={enterHandler}>Enter</button>
    </span>
  );
};

export default Proportions;