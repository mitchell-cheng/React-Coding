import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 0, label: 'item1', completed: false },
    { id: 1, label: 'item2', completed: false },
    { id: 2, label: 'item3', completed: false },
  ]);
  
  function handleToggleCompleted(index) {
    setTodos(
    	todos.map((item, i) => (
        i === index
        	? { ...item, completed: !item.completed }
        	: item
      ))
    );
  }
  
  return (
  	<ul>
      {todos.map((item, index) => (
        <li key={item.id}>
        	<input
            type="checkbox"
            checked={item.completed}
            onChange={() => handleToggleCompleted(index)}
          />
          <span
            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
          >
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}