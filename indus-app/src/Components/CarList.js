import { useContext } from 'react';
import { FilterContext } from '../Context/FilterContext';
import Car from './Car';

const CarList = ({cars}) => {
  const {model, year} = useContext(FilterContext)

  const carFilter = (car) => {
    if (!model && !year) {
      return true
    }
  
    if (model && year) {
      return +car.year === +year && car.model === model
    }
  
    if (model) {
      return car.model === model
    }

    return +car.year === +year
  }

  return (
  <div style={{border: '1px solid black', width: '80%'}}>
    {cars.filter(carFilter).map((car, i) => (<Car key={car.id} {...car} />))}
  </div>
  )}

export default CarList