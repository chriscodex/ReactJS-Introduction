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
}

export { TodoContext, TodoProvider };
