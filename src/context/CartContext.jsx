import React, { children, useContext, useState } from 'react'
const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)


export const CartP = ({children}) =>{
    const [cart, setCart] = useState ([])
    const addProduct = (product, quantity) => {
        if (IsInCart(product.id)) {
            setCart(cart.map(product => {
                return product.id === product.id ? {...product, quantity: product.quantity + quantity } : product
            }))
        } else {
            setCart([...cart, {...product, quantity}])
        }
    }
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }
    const totalProducts = () => cart.reduce((acum, actualProduct) => acum + actualProduct.quantity , 0) 
    const IsInCart = (id) => cart.find(product => product.id === id) ? true : false //verify    
    const removeFCart = (id) => setCart(cart.filter(product => product.id !== id)) //remove   
    const clearCart = () => setCart([]) //clear

          
    return (
        <CartContext.Provider value={{
        IsInCart,
        removeFCart,
        clearCart,
        addProduct,
        totalProducts,  
        totalPrice,
        cart,
    }}>

            {children}
    </CartContext.Provider>
  )
}
