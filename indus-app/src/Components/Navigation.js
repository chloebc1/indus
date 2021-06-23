import { useContext } from 'react'
import { LayoutContext } from '../Context/LayoutContext'
import { CartContext } from '../Context/CartContext'
import {HomeTab, CartTab} from './Constants'

const Navigation = () => {
  const {setTab} = useContext(LayoutContext)
  const {cart} = useContext(CartContext)

  return (
  <nav style={{backgroundColor:'#CECECE', color:'white', padding:'16px', height:'40px', display:'flex', alignItems:'center'}}>
    <ul style={{listStyle:'none', display:'flex', justifyContent:'space-evenly', width:'50%', margin:'0 auto', height:'100%'}}>
      <li style={{cursor: 'pointer', height:'100%'}} onClick={() => setTab(HomeTab)}>{HomeTab}</li>
      <li style={{cursor: 'pointer', height:'100%'}} onClick={() => setTab(CartTab)}>{CartTab}{!!cart.length && (<sup style={{background:'#D64045', borderRadius:'50%', height:'15px', width:'15px', display:'inline-flex', justifyContent:'center'}}>{cart.length}</sup>)}</li>
    </ul>
  </nav>
)}

export default Navigation