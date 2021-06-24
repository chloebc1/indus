import { screen, render } from '@testing-library/react'
import { Model, Year } from './Constants'
import { FilterContext } from '../Context/FilterContext'
import VehicleSearchForm from './VehicleSearchForm'
import userEvent from '@testing-library/user-event'

describe('vehicleSearchForm', () => {

    const setModel = jest.fn()
    const setYear = jest.fn()
    const models = {toyota: ['tundra', 'tacoma']}

  beforeEach(() => {
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

  test("should change display when model and year are changed", () => {

  userEvent.selectOptions(screen.getByTitle(Model),'tacoma')
    expect(setModel).toHaveBeenCalledTimes(1)

    userEvent.selectOptions(screen.getByTitle(Year),'2020')
    expect(setYear).toHaveBeenCalledTimes(1)

  });

})