import React, { useState } from 'react';
import { CATEGORIES } from '../data';

function NewTaskForm({ onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Code');

const handleSubmit = (event) => {
  event.preventDefault();
  onTaskFormSubmit({ text, category }); 
  setText('');
  setCategory('Code');
};

  return (
    <form className='new-task-form' onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type='text'
          name='text'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name='category'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {/* render <option> elements for each category here */}
          {CATEGORIES.filter((cat) => cat !== 'All').map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type='submit' value='Add task' />
    </form>
  );
}

export default NewTaskForm;
