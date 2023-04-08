import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// Creación del contexto
const TodoContext = React.createContext()

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  // Estado para el buscador
  const [searchValue, setSearchValue] = React.useState('');

  // Estado del modal
  const [openModal, setOpenModal] = React.useState(false)

  // Total de tareas
  const totalTodos = todos.length;

  // Total de tareas completadas
  const completedTodos = todos.filter((todo) => todo.completed).length;

  /* Filtro de Todos */
  // Filtro para el buscador y los todos
  let searchedTodos = [];
}

export { TodoContext, TodoProvider }