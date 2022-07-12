// import React from 'react';
// import { cleanup, render, screen } from '@testing-library/react';
// import App from '../App';
// import userEvent from '@testing-library/user-event';

// describe('Desenvolva testes para atingir 50% de cobertura total da aplicação', () => {
//   beforeEach(cleanup);
//   it('input nome dos planetas ', () => {
//     render(<App />);
//     const column = screen.getByTestId('column-filter')
//     const comparison = screen.getByTestId('comparison-filter')
//     const value = screen.getByTestId('value-filter')
//     const inputName = screen.getByTestId('name-filter')
//     const buttonFilter = screen.getByTestId('button-filter')

//     const screeElements = [
//       column,
//       comparison,
//       value,
//       inputName,
//       buttonFilter
//     ]

//     screeElements.forEach((elements) => {expect(elements).toBeInTheDocument()})

//     userEvent.type(inputName, 'Tatooine')
//     const elemento = screen.getByRole('cell', {  name: /tatooine/i})
//     expect(elemento).toBeInTheDocument();
//   });

// })