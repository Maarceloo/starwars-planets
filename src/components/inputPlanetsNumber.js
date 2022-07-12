import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context/ContextProvider';

function InputPlanetsNumber() {
  const { value:
    { filterNumeric,
      filterByNumericValues,
      removeAll,
      filterRemove } } = useContext(Context);

  const arrayColumn = [
    'population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water',
  ];
  const [columnList, setColumnList] = useState(arrayColumn);
  const [column, setColumn] = useState(columnList[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const adicionaColumn = (elemento) => {
    filterRemove(elemento);
    setColumnList([...columnList, elemento]);
  };

  useEffect(() => {
    const columnFilter = (filtro, array) => array.filter(
      (element) => element !== filtro.column,
    );
    let newColumn = columnList;
    filterByNumericValues.forEach((filter) => {
      newColumn = columnFilter(filter, newColumn);
    });
    setColumnList(newColumn);
  }, [filterByNumericValues]);

  const removeAllFilters = () => {
    removeAll();
    setColumnList(arrayColumn);
  };

  return (
    <main>
      <div>
        {filterByNumericValues.map((element) => (
          <p key={ element.column } data-testid="filter">
            <span>
              {element.column}
              ,
              {element.comparison}
              ,
              {element.value}
              <button
                type="button"
                onClick={ () => adicionaColumn(element.column) }
              >
                X

              </button>
            </span>
          </p>))}
      </div>
      <form>
        <label htmlFor="column">
          Column
          <select
            value={ column }
            name="column"
            data-testid="column-filter"
            onClick={ (e) => setColumn(e.target.value) }
          >
            {columnList.map((item) => (
              <option key={ item } value={ item }>{item}</option>))}
            {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
          </select>
        </label>
        <label htmlFor="comparison">
          Operador
          <select
            name="comparison"
            data-testid="comparison-filter"
            value={ comparison }
            onChange={ (e) => setComparison(e.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          data-testid="value-filter"
          name="value"
          type="number"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => filterNumeric({ column, comparison, value }) }
        >
          Filtrar

        </button>
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ () => removeAllFilters() }
        >
          Remover todas filtragens

        </button>
      </form>
    </main>
  );
}

export default InputPlanetsNumber;
