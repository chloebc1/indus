import { ViewCarContext } from '../Context/ViewCarContext'
import React, {useCallback, useContext} from 'react'
import { CartContext } from '../Context/CartContext'

const Car = React.memo(function Car({car}) {
  const {year, make, model, image, price, id} = car
  const {setID} = useContext(ViewCarContext)
  const {addItem, cart} = useContext(CartContext) 
  const addItemToCart = useCallback(() => addItem(car), [cart.length])
  const viewDetail = useCallback(() => setID(id), [])
  const alreadyInCart = !!cart.filter((item) => {
    return item.id === car.id
  }).length

  return (
    <div style={{display: 'flex', height: '200px', alignItems: 'center', paddingRight: '16px', backgroundColor:'white', margin:'8px'}}>
      <img src={image} alt={model} style={{height: '100%'}}/>
      <div className="summary" style={{textAlign: 'left', minWidth: '300px', padding: '0 16px'}}>
        <div style={{marginBottom: '20px'}}><b>${price}</b></div>
        <div>Make: {make}</div>
        <div>Model: {model}</div>
        <div>Year: {year}</div>
        <button onClick={viewDetail} >detail</button>
      </div>
      <button style={{
        marginLeft: 'auto',
        height: '50px',
        width: '120px',
        border: '2px solid #1D3354',
        backgroundColor: alreadyInCart ? 'gray' : '#d64045',
        color: 'white',
        padding: '16px',
        borderRadius: '4px'
      }} disabled= {alreadyInCart} onClick={addItemToCart}>Buy</button>
    </div>
  )
})

export default Car;