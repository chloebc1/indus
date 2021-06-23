import { screen, userEvent, render } from '@testing-library/react'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Cart from './Cart'

describe('cart', () => {
  test("should display ...", () => {
    const car = {id: 'foo', model: 'tundra', make: 'toyota', year: 2020}
    
    render(<Car car={{id: 'foo'}}/>)
    userEvent.click(screen.getByRole('button'))

    render(<Cart />)
    expect(screen.getByTestId('foo')).toBeInTheDocument()
  });
})