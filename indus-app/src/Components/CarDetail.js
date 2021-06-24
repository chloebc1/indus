import {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import { ViewCarContext } from '../Context/ViewCarContext'
import { CartContext } from '../Context/CartContext'

const CarDetail = ({id}) => {

  const [car, setCar] = useState({})
  const {setID} = useContext(ViewCarContext)
  const {addItem} = useContext(CartContext)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:5000/api/vehicles/${id}`,
      );

      setCar(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div style={{textAlign: 'left', margin: '16px 0'}}>
        <button title='BackButton' onClick={() => setID(0)}>Back</button>
      </div>
      <div style={{display: 'flex'}}>
        <div>
          <img style={{display: 'block'}} src={car.image} alt={car.model} />
          <button className="detailBtn" title='ContactButton'>Contact</button>
          <button className="detailBtn" title='PurchaseButton' onClick={() => addItem(car)}>Buy</button>
        </div>
        <div style={{textAlign: 'left', width: '80%', paddingLeft: '16px'}}>
          <h2>${car.price}</h2>
          <div><b>Make: </b>{car.make}</div>
          <div><b>Model: </b>{car.model}</div>
          <div><b>Year: </b>{car.year}</div>
          <div><b>Color: </b>{car.color}</div>
          <div style={{marginTop: '16px'}}><b>Features: </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deleniti distinctio beatae amet nostrum, accusamus voluptate impedit ratione corporis iste dolore reiciendis ipsa ex cum magni eveniet, ut a nulla!
          Expedita, incidunt dolor facilis distinctio voluptatem qui odit animi non minima explicabo eveniet numquam, repellendus fugiat temporibus veniam quam ab labore aperiam tenetur illum iusto impedit exercitationem. Iste, provident quia!
          Iste, amet quidem nisi, beatae enim odit commodi excepturi quos temporibus facilis ex. Distinctio odio sunt animi unde quaerat repudiandae et fugiat, eveniet illo, pariatur, perspiciatis assumenda impedit alias dolorum.
          Cumque asperiores architecto voluptatibus saepe, ea optio eum vero nostrum ut, illum quam commodi dolorem aut omnis? Ipsa, quod. Impedit ad aspernatur est corrupti in vel nulla dicta quo voluptatum.
          Nemo praesentium reiciendis excepturi tenetur in obcaecati doloribus ex dolor minima voluptatibus! Dolorum, voluptatum quia excepturi porro vel eius dolorem cumque ab fugiat praesentium laboriosam! Iure amet nam possimus atque.</div>
        </div>
      </ div>
    </>
  )
}

export default CarDetail;