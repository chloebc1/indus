import { screen, render } from '@testing-library/react'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Cart from './Cart'
import userEvent from '@testing-library/user-event'

describe('cart', () => {
  test("should call Remove Item on button press", () => {
    const cart = [
        {id: 0, model: 'tundra', make: 'toyota', year: 2020},
        {id: 1, model: 'tacoma', make: 'walmart', year: 2019},
        {id: 2, model: 'xfinity', make: 'truck', year: 2018}
  ]

    const removeItem = jest.fn()

    render(
  <CartContext.Provider value={{cart, removeItem}}>
   <Cart />
  </CartContext.Provider>
    )
    expect(screen.getAllByTestId(/cartitem/i)).toHaveLength(cart.length)
  userEvent.click(screen.getAllByTitle('RemoveButton')[0])
  expect(removeItem).toHaveBeenCalledTimes(1)

  });



})