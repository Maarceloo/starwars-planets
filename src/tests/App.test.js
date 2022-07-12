import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

  test('Verifica inputName, column, comparison, value ', () => {
    render(<App />);

    const inputPlanets = screen.getByTestId('name-filter');
    expect(inputPlanets).toBeInTheDocument();

    const column = screen.getByTestId('column-filter')
    expect(column).toBeInTheDocument();

    const comparison = screen.getByTestId('comparison-filter')
    expect(comparison).toBeInTheDocument();

    const value = screen.getByTestId('value-filter')
    expect(value).toBeInTheDocument();

    const buttonFilter = screen.getByTestId('button-filter')
    expect(buttonFilter).toBeInTheDocument();

    const buttonAllFilter = screen.getByTestId('button-remove-filters')
    expect(buttonAllFilter).toBeInTheDocument();
  });

  test('Verficia se planetas estao sendo filtrados', async () => {
    render(<App />);
    const tatooine = await screen.findByText('Tatooine')
    const yavin = await screen.findByText('Yavin IV')
    expect(tatooine).toBeInTheDocument();
    const nameFilter = screen.getByTestId('name-filter')
    userEvent.type(nameFilter, 'Yavin IV')
    expect(tatooine).not.toBeInTheDocument()
    expect(yavin).toBeInTheDocument();
  })
  
  test('Verficia se filtros numericos estao sendo usados', async () => {
    render(<App />);
    const column = screen.getByTestId('column-filter')
    const comparison = screen.getByTestId('comparison-filter')
    const value = screen.getByTestId('value-filter')
    const buttonFilter = screen.getByTestId('button-filter')
    const tatooine = await screen.findByText('Tatooine')
    const endor = await screen.findByText('Endor')
    expect(tatooine).toBeInTheDocument();
    userEvent.selectOptions(column, 'diameter'); 
    userEvent.selectOptions(comparison, 'igual a');
    userEvent.type(value, '4900');
    userEvent.click(buttonFilter);
    expect(tatooine).not.toBeInTheDocument();
    expect(endor).toBeInTheDocument();
    const elemento = screen.getByTestId('filter')
    expect(elemento).toBeInTheDocument();
    
  })