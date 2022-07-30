import React, { useState } from 'react'




const ItemCount = () => {
        const [itemCount, setItemCount] = useState(1);

        const itemAdd = () => {
          setItemCount(itemCount + 1)        
      }
        const itemRemove = () => {
          setItemCount(itemCount - 1)        
      }
return (
    <>   
        <div className="/">
            <button disabled={itemCount === 1 } onClick={itemRemove} className="button remove">-</button>
            {itemCount}
            <button onClick={itemAdd} className="button add ">+</button>
        </div>        
    </>
  )
}

export default ItemCount
