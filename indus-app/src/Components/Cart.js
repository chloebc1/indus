import { CartContext } from '../Context/CartContext'
import {useContext} from 'react'

const Cart = () => {

    const {cart, removeItem} = useContext(CartContext)

    return (
      <div>
          {cart.map((car) => (
              <div key = {car.id} data-testid={'cartitem'+car.id}>
                <div>Make: {car.make} </div>
                <div>Price: {car.price} </div>
                  <br/>
              </div>
          ))}
      </div>

    )
}
export default Cart;