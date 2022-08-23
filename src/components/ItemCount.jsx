import React, { useState } from 'react'




const ItemCount = ({stock, initial, onAdd}) => {
        const [quantity, setQuantity] = useState(initial);

        const itemAdd = () => {
          setQuantity(quantity + 1)        
      }
        const itemRemove = () => {
          setQuantity(quantity - 1)        
      }
return (
    <>   
        <div className="/">
            <button disabled={quantity <= 1 } onClick={itemRemove} className="button remove">-</button>
            <span>{quantity}</span>
            <button disabled = {quantity === stock}  onClick={itemAdd} className="button add ">+</button>
            <br/><button  disabled = {quantity === 0 } onClick={() => onAdd(setQuantity)}><i className="bi bi-cart-plus"></i>  </button>
        </div>        
    </>
  )
}

export default ItemCount
