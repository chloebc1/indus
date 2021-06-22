import { screen, render } from '@testing-library/react'
import Car from './Car'
import {cars} from '../data.js';
import CarDetail from './CarDetail'

describe('car detail', () => {

  test(`should show car detail`, () => {
    render(<CarDetail id={'3d63de10-ad27-4572-b1df-0e750de377fb'}/>)
    expect(screen.getByTitle('ContactButton')).toBeInTheDocument()
    expect(screen.getByTitle('PurchaseButton')).toBeInTheDocument()
    expect(screen.getByText(/price/i)).toBeInTheDocument()
    expect(screen.getByText(/year/i)).toBeInTheDocument()

  });
})