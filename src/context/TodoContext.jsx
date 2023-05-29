import React from 'react';
import { useLocalStorage } from '../customHooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
}

export { TodoContext, TodoProvider };
