import { screen, render } from '@testing-library/react'
import { Search, Model, Year } from './Constants'
import { FilterContext } from '../Context/FilterContext'
import VehicleSearchForm from './VehicleSearchForm'


describe('vehicleSearchForm', () => {
  beforeEach(() => {
    const setModel = jest.fn()
    const setYear = jest.fn()
    const models = {toyota: ['tundra', 'tacoma']}
    render(
      <FilterContext.Provider value={{setModel, setYear}}>
        <VehicleSearchForm models={models}/>
      </FilterContext.Provider>
    )
  })
  test("should display 'Model' and 'Year' drop-downs and Search button", () => {
    expect(screen.getByTitle(Model)).toBeInTheDocument()
    expect(screen.getByTitle(Year)).toBeInTheDocument()
  });
})