import React, { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import getPlanets from '../services/planetsFeth';

export const Context = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  // REQUISIÇÃO API
  useEffect(() => {
    async function api() {
      const response = await getPlanets();
      const obj = response.filter((elemento) => delete elemento.residents);
      setData(obj);
    }
    api();
  }, []);

  // ADD FILTROS STATE
  const filterNumeric = (filter) => {
    setFilterByNumericValues([...filterByNumericValues, filter]);
  };

  return (
    <Context.Provider
      value={ {
        data,
        filterData,
        setFilterData,
        filterByNumericValues,
        setFilterByNumericValues,
        filterNumeric } }
    >
      { children }
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: propTypes.arrayOf(propTypes.shape()).isRequired,
};

export default ContextProvider;
