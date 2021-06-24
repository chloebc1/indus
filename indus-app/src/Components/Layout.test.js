import { screen, render, waitFor } from '@testing-library/react'
import { LayoutContext } from '../Context/LayoutContext';
import { ViewCarContext } from '../Context/ViewCarContext';
import { HomeTab, CartTab } from './Constants';
import Layout from './Layout'
import axios from 'axios'
import { CartContext } from '../Context/CartContext';
import { FilterContext } from '../Context/FilterContext';
import { MessageContext } from '../Context/MessageContext';

jest.mock('axios');

describe('layout', () => {
    const renderLayout = (tab, id = 0, data = null) => {
        const addItem = jest.fn()
        if (data) {
            axios.get.mockImplementationOnce(() => Promise.resolve({data}));
        }
  
        render(
          <LayoutContext.Provider value={{tab}}>
              <ViewCarContext.Provider value={{id}}>
                  <CartContext.Provider value={{addItem, cart:[]}}>
                      <FilterContext.Provider value={{}}>
                        <MessageContext.Provider value={{showContactModal: false}}>
                          <Layout />
                        </MessageContext.Provider>
                      </FilterContext.Provider>
                  </CartContext.Provider>
              </ViewCarContext.Provider>
          </LayoutContext.Provider>
        )
    }

    test("should display car detail", async () => {
      const tab = HomeTab
      const id = 1
      const data = {id: 1, make: 'Toyota', model: 'Tundra', price: 25000, year: 2016}

      renderLayout(tab, id, data)

      await waitFor(() => {
        expect(screen.getByText(new RegExp('toyota', 'i'))).toBeInTheDocument()
      })
    });

    test("should display car list", async () => {
        const tab = HomeTab
        const data = [{id: 1, make: 'Toyota', model: 'Tundra', price: 25000, year: 2016}, {id: 2, make: 'Kia', model: 'Sportage', price: 25000, year: 2017}]
  
        renderLayout(tab, 0, data)
  
        await waitFor(() => {
          expect(screen.getAllByTestId(new RegExp('car-', 'i'))).toHaveLength(data.length)
        })
      });

      test("should display cart", async () => {
        const tab = CartTab
  
        renderLayout(tab)
  
        await waitFor(() => {
          expect(screen.getByTitle('PurchaseButton')).toBeInTheDocument()
        })
      });
  })