import React, { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import getPlanets from '../services/planetsFeth';

export const Context = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  // const [filterData, setFilterData] = useState({ name: '' });

  // REQUISIÇÃO API
  useEffect(() => {
    async function api() {
      const response = await getPlanets();
      const obj = response.filter((elemento) => delete elemento.residents);
      setData(obj);
    }
    api();
  }, []);

  return (
    <Context.Provider value={ data }>
      { children }
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export default ContextProvider;
