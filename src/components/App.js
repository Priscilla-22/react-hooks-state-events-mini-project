import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import { CATEGORIES, TASKS } from '../data';
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(
    TASKS.map((task) => ({ ...task, id: Date.now() + Math.random() }))
  );

  const [selectedCategory, setSelectedCategory] = useState('All');

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  const onCategorySelect = (category) => {
    setSelectedCategory(category);
  };

const onTaskFormSubmit = ({ text, category }) => {
  setTasks([...tasks, { id: Date.now(), text, category }]);
};


  const filteredTasks =
    selectedCategory === 'All'
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className='App'>
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={onCategorySelect}
      />
      <NewTaskForm
        onTaskFormSubmit={onTaskFormSubmit}
        categories={CATEGORIES}
      />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
