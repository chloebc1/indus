import { screen, render } from '@testing-library/react'
import Navigation from './Navigation.js'
import {Home} from './Constants'



describe('navigation', () => {
  test("should see home navigation", () => {
    render(<Navigation />)
    expect(screen.getByText(Home)).toBeInTheDocument()
  });
})