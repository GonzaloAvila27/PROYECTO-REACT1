import React, { Children, useContext, useState } from 'react'
const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)


export const CartP = ({children}) =>{
    const [cart, setCart] = useState ([])
    const addTCart = (item, Q) => {

        if(IsInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, Q: product.Q + Q} : product}))  
            }else {
            setCart([...cart, {item, Q }])
        }
    }
    const addProduct = (item, Q) => {
        if (IsInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, Q: product.Q + Q} : product
            }))
        } else {
            setCart([...cart, {...item, Q}])
        }
    }
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.Q * act.price, 0)
    }
    const totalProducts = () => cart.reduce((acumulador, actualProduct) => acumulador + actualProduct.Q, 0) 
    const IsInCart = (id) => cart.find(product => product.id === id) ? true : false //verify    
    const removeFCart = (id) => setCart(cart.filter(product => product.id !== id)) //remove   
    const clearCart = () => setCart([]) //clear
    return (
        <CartContext.Provider value={{
            addTCart,
            IsInCart,
        removeFCart,
        clearCart,
        addProduct,
        totalProducts,  
        totalPrice,
        cart
    }}>

            {children}
    </CartContext.Provider>
  )
}
