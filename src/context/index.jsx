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

}

export { TodoContext, TodoProvider }