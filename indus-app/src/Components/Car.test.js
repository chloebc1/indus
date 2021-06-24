import { screen, render } from '@testing-library/react'
import { CartContext } from '../Context/CartContext'
import { ViewCarContext } from '../Context/ViewCarContext'
import Car from './Car'
import {cars} from '../data.js';

describe('car', () => {
  const carMake = cars[0].make

  test(`should display car make: ${carMake}`, () => {

    const setID = jest.fn()
      const addItem = jest.fn()

    render(
    <ViewCarContext.Provider value={{setID}}>
      <CartContext.Provider value={{addItem, cart:[cars[0]]}}>
        <Car car={cars[0]}/>
      </CartContext.Provider>
    </ViewCarContext.Provider>
    )

    expect(screen.getByText(new RegExp(carMake))).toBeInTheDocument()
  });
})