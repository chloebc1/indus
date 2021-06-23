import { screen, userEvent, render } from '@testing-library/react'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Cart from './Cart'

describe('cart', () => {
  test("should display ...", () => {
    const cart = [
        {id: 0, model: 'tundra', make: 'toyota', year: 2020},
        {id: 1, model: 'tacoma', make: 'walmart', year: 2019},
        {id: 2, model: 'xfinity', make: 'truck', year: 2018}
  ]
    render(
  <CartContext.Provider value={{cart}}>
   <Cart />
  </CartContext.Provider>
    )
    expect(screen.getAllByTestId(/cartitem/i)).toHaveLength(cart.length)
  });
})