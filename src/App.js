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

  // Filtro para el buscador y los todos
  let searchedTodos = []

  if (searchValue.length < 1) {
    searchedTodos = todos
  } else {
    // Filtro de cada tarea: Coincidencia
    searchedTodos = todos.filter(todo => {
      // Texto de la tarea
      const todoText = todo.text.toLowerCase()

      // Texto de la búsqueda
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    })
  }

  // Componente JSX
  return (
    <react.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
      </TodoList>

      <CreateTodoButtom />
    </react.Fragment>
  )
}

export default App;