import React from 'react';
import { TodoContext } from '../context/index.jsx';
import { TodoCounter } from '../components/TodoCounter/index.jsx';
import { TodoSearch } from '../components/TodoSearch/index.jsx';
import { TodoList } from '../components/TodoList/index.jsx';
import { TodoItem } from '../components/TodoItem/index.jsx';
import { CreateTodoButtom } from '../components/CreateTodoButtom/index.jsx';
import { Modal } from '../components/Modal/index.jsx';
import { TodoForm } from '../components/TodoForm/index.jsx';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButtom
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
