import {useEffect, useState} from 'react'
import axios from 'axios'

const CarDetail = ({id}) => {

  const [car, setCar] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:5000/api/vehicles/${id}`,
      );

      setCar(result.data);

    };

    fetchData();
  }, []);

  console.log(JSON.stringify(car))

  return (
    <>
      <div>{JSON.stringify(car)}</div>
      <button title='ContactButton'>ContactButton</button>
      <button title='PurchaseButton'></button>
    </>
  )
}

export default CarDetail;