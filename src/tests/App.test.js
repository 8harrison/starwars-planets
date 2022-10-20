import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

test('I am your test', () => {
  render(<App />);
  
  const filterTextBox = screen.getByRole('textbox');
  expect(filterTextBox).toBeInTheDocument();
  userEvent.type(filterTextBox, 'tatooine')

  
  const filtro = screen.getByRole('spinbutton')
  expect(filtro).toBeInTheDocument();
  const btnDeFiltro = screen.getByRole('button', {  name: /adicionar filtro/i})
  expect(btnDeFiltro).toBeInTheDocument()  
  userEvent.click(btnDeFiltro);
});

test('testing table orbital-period', async () => {
  render(<App/>)
  const columFilter = screen.getByTestId("column-filter")
  userEvent.selectOptions(columFilter, 'orbital_period')
  const btnDeFiltro = screen.getByRole('button', {  name: /adicionar filtro/i})
  userEvent.click(btnDeFiltro)
  
  const table = screen.getByRole('table')
  expect(table).toBeInTheDocument();
  expect(columFilter).toBeInTheDocument();
  const cells = screen.getByRole('cell', {  name: /10465/i})
  expect(cells).toBeInTheDocument()
})

test('testing Table diameter', () => {
  render(<App />)
  const columFilter = screen.getByTestId("column-filter")
  const compFilter = screen.getByTestId('comparison-filter')
  userEvent.selectOptions(columFilter, 'diameter')
  userEvent.selectOptions(compFilter, 'menor que')
  const btnDeFiltro = screen.getByRole('button', {  name: /adicionar filtro/i})
  userEvent.click(btnDeFiltro)
})
test('testing Table rotation_period', () => {
  render(<App />)
  const columFilter = screen.getByTestId("column-filter")
  const compFilter = screen.getByTestId('comparison-filter')
  userEvent.selectOptions(compFilter, 'igual a')

  userEvent.selectOptions(columFilter, 'rotation_period')
  const btnDeFiltro = screen.getByRole('button', {  name: /adicionar filtro/i})
  userEvent.click(btnDeFiltro)
})
test('testing Table surface_water', () => {
  render(<App />)
  const columFilter = screen.getByTestId("column-filter")
  userEvent.selectOptions(columFilter, 'surface_water')
  const btnDeFiltro = screen.getByRole('button', {  name: /adicionar filtro/i})
  userEvent.click(btnDeFiltro)
})

