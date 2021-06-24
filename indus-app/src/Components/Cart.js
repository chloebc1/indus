import { CartContext } from '../Context/CartContext'
import {useContext} from 'react'

const Cart = () => {

    const {cart, removeItem} = useContext(CartContext)

    return (
      <div style={{maxWidth:'1000px', margin:'0 auto'}}>
          {cart.map((car) => (
              <div key = {car.id} data-testid={'cartitem'+car.id} style={{backgroundColor:'white', margin:'8px', padding:'8px'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                  <div style={{textAlign:'left'}}>
                    <div>Make: {car.make} </div>
                    <div>Model: {car.model} </div>
                    <div>Price: {car.price} </div>
                  </div>
                  <button title={'RemoveButton'} onClick={() => removeItem(car)} style={{marginLeft:'auto'}}>Remove Item</button>
                </div>
              </div>
          ))}
          <button title = 'PurchaseButton' className= 'detailBtn'>Purchase</button>
      </div>

    )
}
export default Cart;