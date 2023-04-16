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

  /* Efecto de carga - React Hook (.useEffect) */
  React.useEffect(() => {
    setTimeout(() => {
      try {
        /* Local Storage */
        // Almacenamiento en local storage
        const localStorageItem = localStorage.getItem(itemName);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });


}