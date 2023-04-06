import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// Creación del contexto
const TodoContext = React.createContext()

function TodoProvider(props) {
  const {
  } = useLocalStorage('TODOS_V1', []);

}

export { TodoContext, TodoProvider }