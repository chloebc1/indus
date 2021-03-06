import { render, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CarDetail from './CarDetail'
import { ViewCarContext } from '../Context/ViewCarContext';
import {CartContext} from '../Context/CartContext';
import axios from 'axios'
import { MessageContext } from '../Context/MessageContext';

jest.mock('axios');

describe('car detail', () => {

  test(`should show car detail`,  async () => {

    const setID = jest.fn()
    const addItem = jest.fn()
    const toggleContactModal = jest.fn()
    const data = {make: 'Toyota', model: 'Tundra', price: 25000, year: 2016}
    const fakeID = 'fake-id'
    axios.get.mockImplementationOnce(() => Promise.resolve({data}));
    
    const {getByText, getByTitle} = render(
      <ViewCarContext.Provider value={{setID}}>
        <CartContext.Provider value={{addItem}}>
          <MessageContext.Provider value={{showContactModal: false, toggleContactModal}}>
            <CarDetail id={fakeID}/>
          </MessageContext.Provider>
        </CartContext.Provider>
      </ViewCarContext.Provider>
    )
    expect(getByTitle('ContactButton')).toBeInTheDocument()
    expect(getByTitle('PurchaseButton')).toBeInTheDocument()
    await waitFor(() => {
      expect(getByText(new RegExp(data.make, 'i'))).toBeInTheDocument()
      expect(getByText(new RegExp(data.price, 'i'))).toBeInTheDocument()
    })

    userEvent.click(getByTitle('PurchaseButton'))
    expect(addItem).toHaveBeenCalledTimes(1)

    userEvent.click(getByTitle('BackButton'))
    expect(setID).toHaveBeenCalledTimes(1)
  });
})