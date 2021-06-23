import { screen, render } from '@testing-library/react'
import { CartContext } from '../Context/CartContext'
import { ViewCarContext } from '../Context/ViewCarContext'
import { useContext } from 'react'
import { FilterContext } from '../Context/FilterContext'
import CarList from './CarList'

describe('car list', () => {
  const testCars = [{'model':'Tacoma', 'id':0},{'model':'Civic', 'id': 1}]
  const carMake = testCars[0].make

  const renderPage = (filterModel='') => {

    const setID = jest.fn()

    render(
      <CartContext.Provider value={{cart: []}}>
        <ViewCarContext.Provider value={{setID}}>
          <FilterContext.Provider value={{model: filterModel}} >
            <CarList cars={testCars}/>
          </FilterContext.Provider>
        </ViewCarContext.Provider>
      </CartContext.Provider>

    )
  }

  test(`should display car make: ${carMake}`, () => {
    renderPage()
    expect(screen.getAllByText(new RegExp(carMake, 'i'))[0]).toBeInTheDocument()
  });

  test(`should display specific car make`, () => {

  renderPage(testCars[0].model)

    expect(screen.queryAllByText(new RegExp(testCars[0].model, 'i'))[0]).toBeInTheDocument()
    expect(screen.queryByText(new RegExp(testCars[1].model, 'i'))).not.toBeInTheDocument()
  });
})