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

}

export { TodoContext, TodoProvider }