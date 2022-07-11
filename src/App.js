import React from 'react';
import './App.css';
import InputPlanets from './components/InputPlanets';
import Table from './components/Table';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <InputPlanets />
      <Table />
    </ContextProvider>
  );
}

export default App;
