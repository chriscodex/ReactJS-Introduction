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
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  // Actualización de componente de local storage
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage }