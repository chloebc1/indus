import { screen, render } from '@testing-library/react'
import { CompanyName } from './Constants'
import Header from './Header'

describe('header', () => {
  test("should display company name", () => {
    render(<Header />)
    expect(screen.getByText(CompanyName)).toBeInTheDocument()
  });
})



