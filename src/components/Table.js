import React, { useContext } from 'react';
import { Context } from '../context/ContextProvider';

function Table() {
  const { data, filterData, filterByNumericValues } = useContext(Context);

  const filterName = () => data
    .filter((planeta) => planeta.name.includes(filterData.name));

  const filtro = (element, array) => {
    const { column, comparison, value } = element;
    if (comparison === 'maior que') {
      return array.filter((iten) => Number(iten[column]) > Number(value));
    }
    if (comparison === 'menor que') {
      return array.filter((iten) => Number(iten[column]) < Number(value));
    }
    if (comparison === 'igual a') {
      return array.filter((iten) => Number(iten[column]) === Number(value));
    }
  };

  const filterNumber = (dataPlanets) => {
    let planetasFiltrados = dataPlanets;
    filterByNumericValues.forEach((elemento) => {
      planetasFiltrados = filtro(elemento, planetasFiltrados);
    });
    return planetasFiltrados;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Superface Water</th>
            <th>Population</th>
            <th>Filmes</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length && filterNumber(filterName()).map((item) => (
              <tr key={ item.name }>
                <td>{ item.name }</td>
                <td>{ item.rotation_period }</td>
                <td>{ item.orbital_period }</td>
                <td>{ item.diameter }</td>
                <td>{ item.climate }</td>
                <td>{ item.gravity }</td>
                <td>{ item.terrain }</td>
                <td>{ item.surface_water }</td>
                <td>{ item.population }</td>
                <td>{ item.films }</td>
                <td>{ item.created }</td>
                <td>{ item.edited }</td>
                <td>{ item.url }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
