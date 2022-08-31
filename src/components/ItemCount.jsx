import React, { useState, useEffect} from 'react'
import { useCartContext } from '../context/CartContext';




const ItemCount = ({stock, initial, onAdd}) => {
const [count, setCount] = useState(initial);
const {cart} = useCartContext();

  useEffect(() => { setCount(initial)}, [initial])
  
  const decrease = () => {
    setCount(count-1)
  }
  
  const increase = () => {
      setCount(count+1)
  }
  
  const handleAdd = () => {
    onAdd(count)
  }


return (
    <>   
        <div className="/">
            <button disabled={count <= 1 } onClick={decrease} className="button remove"> - </button>
            <span>{count}</span>
            <button disabled = {count === stock}  onClick={increase} className="button add "> + </button>
            <br/>
            <button  disabled = {count === 0 }  onClick={handleAdd}><i className="bi bi-cart-plus"></i>  </button>
        </div>        
    </>
  )
}

export default ItemCount


