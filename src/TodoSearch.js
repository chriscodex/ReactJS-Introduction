import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  // React hook - useState
  // Estado inicial: '' - String vacío
  const [searchValue, setSearchValue] = React.useState('')
  
  // Evento de escritura/texto en el input
  const onSearchValueChange = (event) => {
    const value = event.target.value

    // Guardar el valor en el estado setSearchValue
    console.log(value)
    setSearchValue(value)
  }

  return [
    <input
      key="search-input"
      className="TodoSearch" 
      placeholder="Buscar"
      // React Doc: El valor de value debe ser igual a 'searchValue'
      value={searchValue}
      onChange={onSearchValueChange}
    />,
    <p
      key="search-value"
    >
      {searchValue}
    </p>
  ];
}

export { TodoSearch };