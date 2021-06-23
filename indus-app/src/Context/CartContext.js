import {createContext, useState} from 'react'

export const CartContext = createContext(null)
export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    const addItem = item => {
        if (cart.filter(({id}) => item.id === id).length) {
            return
        }
        setCart([...cart, item])
    }
    const removeItem = item => setCart(cart.filter(({id}) => item.id !== id))

    return (
        <CartContext.Provider value={{cart, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}