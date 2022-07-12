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

  // REMOVE TODOS FILTROS
  const removeAll = () => setFilterByNumericValues([]);

  // REMOVE ITEM DE FILTROS
  const filterRemove = (column) => {
    const newFilters = filterByNumericValues.filter((filtro) => filtro.column !== column);
    setFilterByNumericValues(newFilters);
  };

  const value = {
    data,
    filterData,
    setFilterData,
    filterByNumericValues,
    filterRemove,
    setFilterByNumericValues,
    filterNumeric,
    removeAll,
  };

  return (
    <Context.Provider
      value={ { value } }
    >
      { children }
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: propTypes.arrayOf(propTypes.shape()).isRequired,
};

export default ContextProvider;
