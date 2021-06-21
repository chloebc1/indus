import { screen, render } from '@testing-library/react'
import { Search, Model, Year } from './Constants'
import VehicleSearchForm from './VehicleSearchForm'

describe('vehicleSearchForm', () => {
  test("should display 'Search'", () => {
    render(<VehicleSearchForm />)
    expect(screen.getByTitle(Search)).toBeInTheDocument()
  });
  test("should display 'Model' and 'Year' drop-downs and Search button", () => {
    render(<VehicleSearchForm />)
    expect(screen.getByTitle(Model)).toBeInTheDocument()
    expect(screen.getByTitle(Year)).toBeInTheDocument()
    expect(screen.getByTitle(Search)).toBeInTheDocument()
  });
})