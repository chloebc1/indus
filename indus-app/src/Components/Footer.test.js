import { screen, render } from '@testing-library/react'
import { CompanyName } from './Constants'
import Footer from './Footer'

describe('footer', () => {
  test("should display company name", () => {
    render(<Footer />)
    expect(screen.getByText(CompanyName)).toBeInTheDocument()
  });
})