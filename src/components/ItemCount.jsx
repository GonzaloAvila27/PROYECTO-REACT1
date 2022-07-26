import React, { useState } from 'react'



const ItemCount = () => {
        const [itemCount, setItemCount] = useState(1);
        console.log(itemCount);
 
return (
    <>     
        <button className="btn btn-primary" onClick={() => setItemCount(itemCount+1)}>Add to Cart</button>
        <p> N products added {itemCount}</p>
    </>
  )
}

export default ItemCount