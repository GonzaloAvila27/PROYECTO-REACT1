import React, { useState } from 'react'




const ItemCount = ({stock, initial, onAdd}) => {
        const [itemCount, setItemCount] = useState(initial);

        const itemAdd = () => {
          setItemCount(itemCount + 1)        
      }
        const itemRemove = () => {
          setItemCount(itemCount - 1)        
      }
return (
    <>   
        <div className="/">
            <button disabled={itemCount <= 1 } onClick={itemRemove} className="button remove">-</button>
            <span>{itemCount}</span>
            <button disabled = {itemCount === stock}  onClick={itemAdd} className="button add ">+</button>
            <button  disabled = {itemCount === 0 } onClick={() => onAdd(ItemCount)}><i className="bi bi-cart-plus"></i>  </button>
        </div>        
    </>
  )
}

export default ItemCount
