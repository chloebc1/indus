import { screen, render } from '@testing-library/react'
import Car from './Car'
import {cars} from '../data.js';

describe('car', () => {
  const carMake = cars[0].make

  test(`should display car make: ${carMake}`, () => {
    render(<Car {...cars[0]}/>)
    expect(screen.getByText(new RegExp(carMake))).toBeInTheDocument()
  });
})