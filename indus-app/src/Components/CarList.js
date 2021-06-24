import React, { useContext } from 'react';
import { FilterContext } from '../Context/FilterContext';
import Car from './Car';

const CarList = React.memo(function CarList({cars}) {
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
  <div style={{width: '80%'}}>
    {cars.filter(carFilter).map((car, i) => (<div data-testid={'car-' + car.id}key={car.id} ><Car  car={car} /></div>))}
  </div>
  )})

export default CarList