import React, { useContext } from 'react';
import { Context } from '../context/ContextProvider';

function InputPlanetsName() {
  const { filterData, setFilterData } = useContext(Context);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="nome do planeta"
        value={ filterData.name }
        onChange={ (e) => setFilterData({ name: e.target.value }) }
      />
    </div>
  );
}

export default InputPlanetsName;
