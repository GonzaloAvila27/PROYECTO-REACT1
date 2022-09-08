import React, { useState, useEffect} from 'react'
import { useCartContext } from '../context/CartContext';
import './Styles/itemdetail.css'




const ItemCount = ({stock, initial, onAdd}) => {
const [count, setCount] = useState(initial);
const {cart} = useCartContext();

  useEffect(() => { setCount(initial)}, [initial])
  
  const decrease = () => {
    setCount(count - 1)
  }
  
  const increase = () => {
        setCount(count + 1)   
}
  
  const handleAdd = () => {
    onAdd(count)
  }


return (
    <>   
        <div className="counter">
            <button disabled={count <= 1 } onClick={decrease} className="counter__remove"> - </button>
            <span className='counter__number'>{count}</span>
            <button disabled = {count === stock}  onClick={increase} className="counter__add "> + </button>  
            <span  disabled = {count === 0 }  onClick={handleAdd}><i className="counter__cart bi bi-cart-plus"></i>  </span>
        </div>        
    </>
  )
}

export default ItemCount


