import Car from './Car';

const CarList = ({cars}) => (
  <div style={{border: '1px solid black', width: '80%'}}>
    {cars.map((car, i) => (<Car key={i} {...car} />))}
  </div>
  )

export default CarList