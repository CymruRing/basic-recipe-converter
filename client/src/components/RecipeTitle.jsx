import React, { useState } from 'react';

// add edit functionality 

const RecipeTitle = (props) => {
  const [title, setTitle] = useState(props.title);
  const [highlightEdit, setHighlightEdit] = useState('edit');

  // input handler
  const updateTitle = (e) => {
    setTitle(title => e.target.value);
  };    
  
  // push title to app
  const submitTitle = () => {
    props.setTitle(title);
  };

  // allow user to edit input
  const allowEdit = () => {
    setHighlightEdit('edit');
    props.allowTitleEdit();
  };

  // if exists render title else render input
  if (props.hasTitle) {
    return (
        <h2>
          {props.title}  
          <span 
            className={highlightEdit}
            onClick={allowEdit}
            onMouseEnter={() => setHighlightEdit('editHover')}
            onMouseLeave={() => setHighlightEdit('edit')}>edit</span>
        </h2>      
    );
  } else {
    return (
      <span>
        <input 
          id='titleInput'
          placeholder='Recipe Title' 
          onChange={updateTitle} 
        ></input>
        <button onClick={submitTitle}>Enter</button> 
      </span>
    );
  }

};

export default RecipeTitle;