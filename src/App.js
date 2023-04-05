import react from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButtom } from './CreateTodoButtom.js';
//import './App.css';

const defaultTodos = [
  { text: 'Tarea 1', completed: false },
  { text: 'Tareas 2', completed: true },
  { text: 'Tarea 3', completed: false },
];

function App() {
  // Estados para los to do
  const [todos, setTodos] = react.useState(defaultTodos)

  // Estado para el buscador
  const [searchValue, setSearchValue] = react.useState('')

  // Total de tareas
  const totalTodos = todos.length

  // Total de tareas completadas
  const completedTodos = todos.filter(todo => todo.completed).length

}

export default App;