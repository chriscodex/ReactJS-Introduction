import React from 'react';
import { useLocalStorage } from '../customHooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  // Estado para el modal
  const [openModal, setOpenModal] = React.useState(false);

  // Contador de todos completados
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

}

export { TodoContext, TodoProvider };
