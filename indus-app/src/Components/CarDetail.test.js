import { render, waitFor, cleanup } from '@testing-library/react'
import CarDetail from './CarDetail'
import { ViewCarContext } from '../Context/ViewCarContext';
import {CartContext} from '../Context/CartContext';
import axios from 'axios'

jest.mock('axios');

describe('car detail', () => {
  afterEach(cleanup);

  test(`should show car detail`,  async () => {

    const setID = jest.fn()
    const addItem = jest.fn()
    const data = {make: 'Toyota', model: 'Tundra', price: 25000, year: 2016}
    const fakeID = 'fake-id'
    axios.get.mockImplementationOnce(() => Promise.resolve({data}));
    
    const {getByText, getByTitle} = render(
      <ViewCarContext.Provider value={{setID}}>
        <CartContext.Provider value={{addItem}}>
          <CarDetail id={fakeID}/>
        </CartContext.Provider>
      </ViewCarContext.Provider>
    )
    expect(getByTitle('ContactButton')).toBeInTheDocument()
    expect(getByTitle('PurchaseButton')).toBeInTheDocument()
    await waitFor(() => {
      expect(getByText(new RegExp(data.make, 'i'))).toBeInTheDocument()
      expect(getByText(new RegExp(data.price, 'i'))).toBeInTheDocument()
    })

  });
})