import React from 'react';
import './App.css';
import InputPlanetsName from './components/InputPlanetsName';
import InputPlanetsNumber from './components/inputPlanetsNumber';
import Table from './components/Table';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <InputPlanetsNumber />
      <InputPlanetsName />
      <Table />
    </ContextProvider>
  );
}

export default App;
