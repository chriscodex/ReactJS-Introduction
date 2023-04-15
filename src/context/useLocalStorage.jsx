import React from 'react';

/* Custom Hook */
function useLocalStorage(itemName, initialValue) {
  // Estado de error
  const [error, setError] = React.useState(false);

  // Estado de carga
  const [loading, setLoading] = React.useState(true);

  /* Manejo del Estado */
  // Estados para el item
  const [item, setItem] = React.useState(initialValue);



}