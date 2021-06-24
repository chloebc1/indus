import { screen, render } from '@testing-library/react'
import { CartContext } from '../Context/CartContext'
import { ViewCarContext } from '../Context/ViewCarContext'
import { useContext } from 'react'
import { FilterContext } from '../Context/FilterContext'
import CarList from './CarList'

describe('car list', () => {
  const testCars = [{'model':'Tacoma', 'id':0, 'year':2020},{'model':'Civic', 'id': 1, 'year':2018},{'model':'Civic', 'id': 2, 'year':2019}]
  const carMake = testCars[0].make

  const renderPage = (filterModel='', filterYear=0) => {

    const setID = jest.fn()

    render(
      <CartContext.Provider value={{cart: []}}>
        <ViewCarContext.Provider value={{setID}}>
          <FilterContext.Provider value={{model: filterModel, year: filterYear}} >
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

  test(`should display specific year`, () => {

    renderPage(undefined,testCars[0].year)

    expect(screen.queryByTestId(testCars[0].id)).toBeInTheDocument()
    expect(screen.queryByTestId(testCars[1].id)).not.toBeInTheDocument()
    expect(screen.queryByTestId(testCars[2].id)).not.toBeInTheDocument()
  });

  test(`should display specific car make and year`, () => {

    renderPage(testCars[1].model, testCars[2].year)

    expect(screen.queryByTestId(testCars[0].id)).not.toBeInTheDocument()
    expect(screen.queryByTestId(testCars[1].id)).not.toBeInTheDocument()
    expect(screen.queryByTestId(testCars[2].id)).toBeInTheDocument()
  });
})