import { screen, render } from '@testing-library/react'
import CarList from './CarList'
import {cars} from '../data.js';

describe('car list', () => {
  const carMake = cars[0].make

  test(`should display car make: ${carMake}`, () => {
    render(<CarList cars={cars}/>)
    expect(screen.getAllByText(new RegExp(carMake, 'i'))[0]).toBeInTheDocument()
  });
})