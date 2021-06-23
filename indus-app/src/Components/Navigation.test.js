import { screen, render } from '@testing-library/react'
import Navigation from './Navigation.js'
import {HomeTab} from './Constants'
import { FilterContext } from '../Context/FilterContext.js';
import { LayoutContext } from '../Context/LayoutContext.js';
import { CartContext } from '../Context/CartContext.js';



describe('navigation', () => {
  test("should see home navigation", () => {
    const setTab = jest.fn()

    render(
      <LayoutContext.Provider value={{setTab}}>
        <CartContext.Provider value={{cart:[]}}>
          <Navigation />
        </CartContext.Provider>
      </LayoutContext.Provider>
    )
    expect(screen.getByText(HomeTab)).toBeInTheDocument()
  });
})