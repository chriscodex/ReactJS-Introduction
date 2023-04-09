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

  if (searchValue.length < 1) {
    searchedTodos = todos;
  } else {
    // Filtro de cada tarea: Coincidencia
    searchedTodos = todos.filter((todo) => {
      // Texto de la tarea
      const todoText = todo.text.toLowerCase();

      // Texto de la búsqueda
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  // To do completado
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => {
      return todo.text === text;
    });

    // Copiar elementos del estado a otro array
    const newTodos = [...todos];

    // Cambiar la propiedad del objeto
    newTodos[todoIndex].completed = true;

    // Actualzar el estado - rerenderizado
    saveTodos(newTodos);
  };
  
  // To do completado
  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({
      completed: false,
      text
    })

    // Actualzar el estado - rerenderizado
    saveTodos(newTodos);
  };

  // To do eliminado
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => {
    });
  };

}

export { TodoContext, TodoProvider }