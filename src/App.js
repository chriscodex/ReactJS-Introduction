import react from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButtom } from './CreateTodoButton.js';
//import './App.css';

const todos = [
  { text: 'Tarea 1', completed: false },
  { text: 'Tarea 2', completed: false },
  { text: 'Tarea 3', completed: false },
];

function App() {
  return (
    <react.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} otraPropiedad='xd'/>
        ))}
      </TodoList>
      <CreateTodoButtom />
    </react.Fragment>
  );
}

export default App;
