import React, { useEffect, useState } from 'react';
import './App.css';
import Context from './context/Context';
import Table from './components/Table';
import getPlanets from './services/planetsFeth';
import Headers from './components/Headers';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function api() {
      const response = await getPlanets();
      const resposta = response.filter((elemento) => delete elemento.residents);
      setData(resposta);
    }
    api();
  }, []);

  return (
    <Context.Provider value={ data }>
      <Headers />
      <Table />
    </Context.Provider>

  );
}

export default App;
